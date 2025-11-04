import styles from '../Common/EasingFunctionDemo.module.css'

export default function EasingFunctionLinear() {
    return (
        <section>
            <h2>Linear easing-functions</h2>
            <div className={styles.marios}>
                <div className={styles['container']}>
                    <div className={styles['mario-linear']}>
                        <div>linear</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-linear1']}>
                        <div>linear(0% 0, 50% 0.3 100% 1)</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-linear2']}>
                        <div>linear(0% 0, 33% 0.75, 66% 0.25, 100% 1)</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
