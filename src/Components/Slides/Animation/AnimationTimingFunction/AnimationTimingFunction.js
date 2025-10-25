import styles from './AnimationTimingFunction.module.css'

export default function AnimationTimingFunction() {
    return (
        <section>
            <h2><code>animation-timing-function</code> property</h2>
            <p>
                The <code>animation-timing-function</code> property can be used to specify how the animation progresses between keyframes.
                Like the <code>transition-timing-function</code> property, it accepts an <i>easing function</i>.
                This property also can be used in <code>@keyframes</code> to define the timing function between each keyframe individually.
            </p>
            <p>
                Here is an example comparing if we only apply <code>linear</code> to the whole animation versus applying a <code>linear</code> and
                <code>ease-in-out</code> timing function to different parts of the animation:
            </p>
            <div className={styles.marios}>
                <div className={styles.container}>
                    <div className={styles['mario-linear']}>
                        <div>linear</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-ease']}>
                        <div>ease-in-out</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-two-function']}>
                        <div>linear, ease-in-out</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
