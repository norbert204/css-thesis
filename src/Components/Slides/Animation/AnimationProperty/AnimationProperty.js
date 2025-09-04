import Loading from '../../../Common/Loading/Loading'
import RotatingCube from '../../../Common/RotatingCube/RotatingCube'

export default function AnimationProperty() {
    return (
        <section className='two-columns'>
            <div>
                <h1>The <code>animation</code> property</h1>
                <p>
                    The <code>animation</code> is a short-hand property that let's you apply custom made <i>animations</i> to elements.
                    Unlike transitions, which only let you transition between two stages of a property, with animations,
                    you can define as many stages as you need.
                </p>
                <p>
                    It consists of the following sub-properties:
                </p>
                <ul>
                    <li><code>animation-delay</code></li>
                    <li><code>animation-direction</code></li>
                    <li><code>animation-duration</code></li>
                    <li><code>animation-fill-mode</code></li>
                    <li><code>animation-iteration-count</code></li>
                    <li><code>animation-name</code></li>
                    <li><code>animation-play-state</code></li>
                    <li><code>animation-timeline</code></li>
                    <li><code>animation-timing-function</code></li>
                </ul>
            </div>
            <div className="centered-demo">
                <RotatingCube />
            </div>
        </section>
    )
}
