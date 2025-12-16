import styles from "./FilterSectionTitle.module.css"

export default function FilterSectionTitle() {
    return (
        <section className="section-title">
            <h1 className={styles["filtered-title"]}>Filters</h1>
        </section>
    )
}
