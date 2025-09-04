import React, { useRef, useState } from "react"
import CodeBlock from "../../../Common/CodeBlock/CodeBlock"
import Dialog from "../../../Common/Dialog/Dialog"
import RotatingCube from "../../../Common/RotatingCube/RotatingCube"
import { RotatingCubeAnimations } from "../../../Common/RotatingCube/RotatingCubeAnimation"

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

    const dialogRef = useRef(null)

    function openDialog() {
        dialogRef.current.show()
    }

    const [selectedAnimation, setSelectedAnimation] = useState(RotatingCubeAnimations.ALL_DIRECTION)

    function radioButtonChange(event) {
        setSelectedAnimation(event.target.value)
    }

    return (
        <>
            <section className="two-columns">
                <div>
                    <h2><code>animation-name</code> property</h2>
                    <p>
                        Let's start with the <code>animation-name</code> sub-property. With this, we can tell what animation should be played on our element.
                        But before we can say what animation to play, we need to create an animation first.
                    </p>
                    <p>
                        Animations can be created inside
                        a <code>@keyframes</code> at-rule. Here is an example: <button onClick={openDialog}>Show example</button>
                    </p>
                    <p>
                        Once we defined the <i>animation keyframes</i>, we can use it in the <code>animation-name</code> property.
                    </p>
                    <p>
                        Try switching the property's value below and see how the demo changes on the right:
                    </p>
                    <ul>
                        <React.Fragment>
                            {
                                Object.keys(RotatingCubeAnimations).map(animation => {
                                    const value = RotatingCubeAnimations[animation]

                                    return (
                                        <li>
                                            <label>
                                                <input type="radio"
                                                    name="animation-name"
                                                    value={value}
                                                    checked={selectedAnimation === value}
                                                    onChange={radioButtonChange} />
                                                <code>animation-name: {value};</code>
                                            </label>
                                        </li>)
                                })
                            }
                        </React.Fragment>
                    </ul>
                </div>
                <div className="centered-demo">
                    <RotatingCube animation={selectedAnimation} />
                </div>
            </section>
            <Dialog ref={dialogRef}>
                <CodeBlock code={exampleCode} />
            </Dialog>
        </>
    )
}
