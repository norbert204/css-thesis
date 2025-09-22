import styles from './ExampleMario.module.css'

export default function ExampleMario() {
    return (
        <>
            <h1>Jumping Mario</h1>
            <div className={styles['container']}>
                <div className={styles['mario']}>
                    <div className={styles['mario-animation']}></div>
                    <div className={styles['turtle-animation']}></div>
                    <div className={styles['platform-1']}></div>
                    <div className={styles['platform-2']}></div>
                </div>
            </div>
        </>
    )
}
