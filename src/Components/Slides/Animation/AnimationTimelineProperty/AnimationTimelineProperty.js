import styles from './AnimationTimelineProperty.module.css'

export default function AnimationTimelineProperty() {
    return (
        <section>
            <h2><code>animation-timeline</code> property</h2>
            <div className={styles.container}>
                <div className={styles["scroll-container"]}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles["view-container"]}>
                    <div className={styles.viewport}>
                        <div className={styles.image}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
