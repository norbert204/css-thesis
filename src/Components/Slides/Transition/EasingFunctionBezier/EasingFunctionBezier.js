import styles from '../Common/EasingFunctionDemo.module.css'

export default function EasingFunctionBezier() {
    return (
        <section>
            <h2>Cubic-Bézier easing-functions</h2>
            <div className={styles.marios}>
                <div className={styles['container']}>
                    <div className={styles['mario-ease']}>
                        <div>ease</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-ease-in']}>
                        <div>ease-in</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-ease-out']}>
                        <div>ease-out</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-ease-in-out']}>
                        <div>ease-in-out</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-bezier']}>
                        <div>cubic-bezier(0.15, 0.85, 0.85, 0.25)</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
