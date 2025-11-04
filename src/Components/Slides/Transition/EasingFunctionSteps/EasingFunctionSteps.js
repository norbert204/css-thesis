import styles from '../Common/EasingFunctionDemo.module.css'

export default function EasingFunctionSteps() {
    return (
        <section>
            <h2>Stepper easing-functions</h2>
            <div className={styles.marios}>
                <div className={styles['container']}>
                    <div className={styles['mario-step-start']}>
                        <div>step-start</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-step-end']}>
                        <div>step-end</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-step-jump-start']}>
                        <div>steps(3, jump-start)</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-step-jump-end']}>
                        <div>steps(3, jump-end)</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-step-jump-none']}>
                        <div>steps(3, jump-none)</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                    <div className={styles['mario-step-jump-both']}>
                        <div>steps(3, jump-both)</div>
                        <div className={styles['running-track']}>
                            <div className={styles.mario}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
