export default function TransitionTimingFunction() {
    return (
        <section>
            <h2><code>transition-timing-function</code> property</h2>
            <p>
                We would expect it to be a linear transition, but we can define more subtle transitions.
                The <code>transition-timing-function</code> property can be used to define
                how the property's value transitions from one value to another using an <b>easing-function</b>.
            </p>
            <p>
                There are three types of easing-functions to choose from:
                <ul>
                    <li>Linear</li>
                    <li>Cubic-Bézier curve based functions</li>
                    <li>Stepper functions</li>
                </ul>
            </p>
        </section>
    )
}
