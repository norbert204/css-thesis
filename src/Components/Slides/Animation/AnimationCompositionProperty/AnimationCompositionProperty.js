import styles from './AnimationCompositionProperty.module.css'

export default function AnimationCompositionProperty() {
    return (
        <section>
            <h2><code>animation-composition</code> property</h2>
            <p></p>
            <div className={styles.container}>
                <div>replace</div>
                <div className={styles.box + ' ' + styles.box1}></div>
                <div>add</div>
                <div className={styles.box + ' ' + styles.box2}></div>
                <div>accumulate</div>
                <div className={styles.box + ' ' + styles.box3}></div>
            </div>
        </section>
    )
}
