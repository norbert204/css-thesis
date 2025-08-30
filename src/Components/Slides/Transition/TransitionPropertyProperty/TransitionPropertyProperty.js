import styles from './TransitionPropertyProperty.module.css'

export default function TransitionPropertyProperty() {
    const marginExampleClasses = [styles["example-box"], styles["example-margin"]].join(' ')
    const paddingExampleClasses = [styles["example-box"], styles["example-padding"]].join(' ')
    const backgroundExampleClasses = [styles["example-box"], styles["example-background"]].join(' ')
    const opacityExampleClasses = [styles["example-box"], styles["example-opacity"]].join(' ')

    return (
        <section>
            <h2><code>transition-property</code> property</h2>
            <p>
                This sub-property lets us define which CSS property do we want to add a <i>transition</i> to.
            </p>
            <p>
                We have a few examples below for different values for the property. We also set the <code>transition-duration: 1s</code>,
                and <code>transition-timing-function: ease-in-out</code> property values for the example boxes.
            </p>
                <div className={styles["example-list"]}>
                    <div>
                        <code>transition-property: margin</code>
                    </div>
                    <div>
                        <span className={marginExampleClasses}>Hover me</span>
                    </div>
                    <div>
                        <code>transition-property: padding</code>
                    </div>
                    <div>
                        <span className={paddingExampleClasses}>Hover me</span>
                    </div>
                    <div>
                        <code>transition-property: background</code>
                    </div>
                    <div>
                        <span className={backgroundExampleClasses}>Hover me</span>
                    </div>
                    <div>
                        <code>transition-property: opacity</code>
                    </div>
                    <div>
                        <span className={opacityExampleClasses}>Hover me</span>
                    </div>
                </div>
        </section>
    )
}
