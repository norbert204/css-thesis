import styles from './TransitionProperty.module.css'

export default function TransitionProperty() {
    return (
        <section className="two-columns">
            <div>
                <h2>The <code>transition</code> property</h2>
                <p>
                    This is a short-hand property that let's you smoothly (or not so smoothly if you want that)
                    transition between two states of another property's value.
                </p>
                <blockquote>
                    States in this context mean when the given property's value changes. For example by a pseudo-class,
                    like <code>:hover</code> and <code>:focus-visible</code>
                </blockquote>
                <p>
                    This short-hand property includes the following sub-properties:
                    <ul>
                        <li><code>transition-property</code></li>
                        <li><code>transition-behavior</code></li>
                        <li><code>transition-delay</code></li>
                        <li><code>transition-duration</code></li>
                        <li><code>transition-timing-function</code></li>
                    </ul>
                </p>
            </div>
            <div className="centered-demo">
                <div className={styles["hoverable-div"]} tabIndex={0}>
                    Hover me
                </div>
            </div>
        </section>
    )
}
