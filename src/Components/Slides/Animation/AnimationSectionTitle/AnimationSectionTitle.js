import styles from './AnimationSectionTitle.module.css'

export default function AnimationSectionTitle() {
    return (
        <section className='section-title'>
            <h1>{ 'Animations' }</h1>
            <div className={styles.animation}>
                <div className={styles.cube}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>
        </section>
    )
}
