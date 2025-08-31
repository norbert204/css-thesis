import CodeBlock from "../../../Common/CodeBlock/CodeBlock"

export default function AnimationNameProperty() {
    const exampleCode = `@keyframes <animation-name> {
    0% {
        background: red;
    }

    50% {
        padding-top: 1em;
        background: green;
    }

    100% {
        background: blue;
    }
}
`

    return (
        <section className="two-columns">
            <div>
                <h2><code>animation-name</code> property</h2>
                <p>
                    Let's start with the <code>animation-name</code> sub-property. With this, we can tell what animation should be played on our element.
                    But before we can say what animation to play, we need to create an animation first.
                </p>
                <p>
                    Animations can be created inside
                    a <code>@keyframes</code> at-rule. Here is an example:
                </p>
                <CodeBlock code={exampleCode} />
            </div>
            <div>
            </div>
        </section>
    )
}
