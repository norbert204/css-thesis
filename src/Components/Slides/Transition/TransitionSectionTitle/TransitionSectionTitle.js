import styles from './TransitionSectionTitle.module.css'

export default function TransitionSectionTitle() {
    const sectionClasses = [
        "section-title",
        styles["magnifier-cursor"],
    ]
    .join(' ')

    return (
        <section className={sectionClasses}>
            <h1 className={styles["shy-heading"]} tabIndex={ 0 }>{ "Transitions" }</h1>
        </section>
    )
}
