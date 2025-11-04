import styles from './ExampleMadEmoji.module.css'

export default function ExampleMadEmoji() {
    return (
        <section>
            <h2>Mad guy</h2>
            <div className={styles.container}>
                <div className={styles.emoji}></div>
                <div className={styles.warning}>
                    Don't touch me!
                </div>
            </div>
        </section>
    )
}
