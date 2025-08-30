import { useState, useEffect } from 'react';
import styles from './Example3dRoom.module.css';

const speed = 1
const yRotationLimit = 80

export default function Example3dRoom() {
    const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
    const [realCameraRotation, setRealCameraRotation] = useState({ x: 0, y: 0, z: 0 });
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0, z: 0 });
    const [eventsRegistered, setEventsRegistered] = useState(false);

    useEffect(
        () => {
            function movePlayer(direction, side) {
                setPlayerPosition((prevPosition) => {
                    let newPosition = {
                        x: prevPosition.x,
                        y: prevPosition.y,
                        z: prevPosition.z
                    };

                    const rotationOffset = side ? -90 : 0

                    newPosition.z += direction * speed * Math.cos((Math.PI * (cameraRotation.y - rotationOffset)) / 180)
                    newPosition.x -= direction * speed * Math.sin((Math.PI * (cameraRotation.y - rotationOffset)) / 180)

                    return newPosition;
                })
            }

            // TODO: Make this feel better - maybe React will be a limitation
            function handleKeyDown(event) {
                if (event.key === 'w') {
                    movePlayer(1, false)
                }
                else if (event.key === 's') {
                    movePlayer(-1, false)
                }
                else if (event.key === 'a') {
                    movePlayer(-1, true)
                }
                else if (event.key === 'd') {
                    movePlayer(1, true)
                }
            }

            document.addEventListener('keydown', handleKeyDown)

            return () => {
                document.removeEventListener('keydown', handleKeyDown)
            }
        },
        [cameraRotation])

    useEffect(() => {
        // Need the .replace to escape the + in the class name
        const viewport = document.querySelector(`.${styles.viewport}`.replace("+", "\\+"));

        function handlePointerMove(event) {
            setCameraRotation((prevRotation) => {
                let x = prevRotation.x + event.movementY;
                let y = prevRotation.y + event.movementX;

                if (x > yRotationLimit) {
                    x = yRotationLimit
                } else if (x < -yRotationLimit) {
                    x = -yRotationLimit
                }

                if (y < 0) {
                    y += 360
                } else if (y > 360) {
                    y -= 360
                }

                setRealCameraRotation({
                    x: x * Math.cos(Math.PI * y / 180),
                    y: y,
                    z: x * Math.sin(Math.PI * y / 180),
                })

                return {
                    x: x,
                    y: y,
                }
            })
        }

        document.onpointerlockchange = (event) => {
            if (document.pointerLockElement === viewport && !eventsRegistered) {
                viewport.addEventListener('mousemove', handlePointerMove);

                setEventsRegistered(true);
            } else if (document.pointerLockElement !== viewport && eventsRegistered) {
                viewport.removeEventListener('mousemove', handlePointerMove);

                setEventsRegistered(false);
            }
        }

        viewport.addEventListener('click', async () => {
            await viewport.requestPointerLock({
                unadjustedMovement: true
            })
        })

        return () => {

        }
    },
    [cameraRotation])

    return (
        <div className={styles.container}>
            <div className={styles.viewport}>
                <div className={styles.camera}>
                    <div className={styles.player} style={{ transform: `rotateX(${realCameraRotation.x}deg) rotateY(${realCameraRotation.y}deg) rotateZ(${realCameraRotation.z}deg) translateZ(${playerPosition.z}vw) translateX(${playerPosition.x}vw)` }}>
                        <div className={styles.floor}></div>
                        <div className={styles["closing-walls"]}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles["central-pillar"]}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.ceiling}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
