import { RotatingCubeAnimations } from './RotatingCubeAnimation.js'
import styles from './RotatingCube.module.css'

export default function RotatingCube({ animation, duration }) {
    const animationName = styles[animation ?? RotatingCubeAnimations.ALL_DIRECTION]
    const animationDuration = duration ?? 3

    const cubeStyle = {
        "--cube-animation-name": animationName,
        "--cube-animation-duration": `${animationDuration}s`,
    }

    return (
        <div className={styles["perspective"]}>
            <div className={styles["cube"]} style={cubeStyle}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
    )
}
