import { useState, useEffect } from 'react';
import styles from './Example3dRoom.module.css';

const speed = 1
const yRotationLimit = 80

export default function Example3dRoom() {
    const [pressedKeys, setPressedKeys] = useState({})
    const [cameraRotation, setCameraRotation] = useState({ x: 0, y: 0 });
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0, z: 0 });


    useEffect(
        () => {
            function toRad(degree) {
                return (Math.PI * degree) / 180
            }

            function movePlayer(movementVector) {
                setPlayerPosition((prevPosition) => {
                    let newPosition = { ...prevPosition }

                    const yRotationRad = toRad(cameraRotation.y)

                    const cos = Math.cos(yRotationRad)
                    const sin = Math.sin(yRotationRad)

                    const forward = {
                        y: cos,
                        x: sin,
                    }

                    const right = {
                        y: sin,
                        x: -cos,
                    }

                    const velocity = {
                        x: (movementVector.y * forward.x + movementVector.x * right.x),
                        y: (movementVector.y * forward.y + movementVector.x * right.y),
                    }

                    const length = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y)

                    console.log(length)

                    const normalizedVelocity = {
                        x: velocity.x / length,
                        y: velocity.y / length
                    }

                    newPosition.x = prevPosition.x - normalizedVelocity.x * speed
                    newPosition.z = prevPosition.z + normalizedVelocity.y * speed

                    return newPosition;
                })
            }

            const interval = setInterval(() => {
                let movementVector = { x: 0, y: 0 }

                if ("w" in pressedKeys && pressedKeys["w"] === true) {
                    movementVector.y = 1
                }
                else if ("s" in pressedKeys && pressedKeys["s"] === true) {
                    movementVector.y = -1
                }

                if ("d" in pressedKeys && pressedKeys["d"] === true) {
                    movementVector.x = -1
                }
                else if ("a" in pressedKeys && pressedKeys["a"] === true) {
                    movementVector.x = 1
                }

                if (movementVector.x === 0 && movementVector.y === 0) {
                    return
                }

                movePlayer(movementVector)
            }, 10)

            return () => {
                clearInterval(interval)
            }
        },
        [pressedKeys, cameraRotation])

    useEffect(
        () => {
            function handleKeyDown(event) {
                setPressedKeys(previous => {
                    let result = { ...previous }

                    result[event.key] = true

                    return result
                })
            }

            function handleKeyUp(event) {
                setPressedKeys(previous => {
                    let result = { ...previous }

                    result[event.key] = false

                    return result
                })
            }

            document.addEventListener('keydown', handleKeyDown)
            document.addEventListener('keyup', handleKeyUp)

            return () => {
                document.removeEventListener('keydown', handleKeyDown)
                document.removeEventListener('keyup', handleKeyUp)
            }
        },
        [])

    useEffect(
        () => {
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

                    return {
                        x: x,
                        y: y,
                    }
                })
            }

            viewport.addEventListener('mousemove', handlePointerMove);

            function handleClick() {
                viewport.requestPointerLock()
            }

            viewport.addEventListener('click', handleClick)

            return () => {
                viewport.removeEventListener('click', handleClick)
                viewport.removeEventListener('mousemove', handlePointerMove)
            }
        },
        [])

    return (
        <section>
            <h2>3D Room</h2>
            <div className={styles.container}>
                <div className={styles.viewport}>
                    <div className={styles.camera}>
                        <div className={styles.player} style={{ transform: `rotateY(${cameraRotation.y}deg) translateZ(${playerPosition.z}vw) translateX(${playerPosition.x}vw)` }}>
                            <div className={styles.room1}>
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
                                <div className={styles["corner"]}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.ceiling}></div>
                            </div>
                            <div className={styles.corridor}>
                                <div className={styles.floor}></div>
                                <div className={styles.walls}>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.ceiling}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className={styles.room2}>
                                <div className={styles.walls}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.ceiling}></div>
                                <div className={styles.floor}></div>
                                <div className={styles["poison-pit"]}>
                                    <div className={styles.poison}></div>
                                    <div className={styles.walls}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
