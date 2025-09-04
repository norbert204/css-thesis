import { useState } from 'react'
import RotatingCube from '../../../Common/RotatingCube/RotatingCube';

export default function AnimationDuration() {
    const [duration, setDuration] = useState(3);

    function onSliderChange(e) {
        setDuration(e.target.value);
    }

    return (
        <section className='two-columns'>
            <div>
                <h2><code>animation-duration</code> property</h2>
                <p>
                    This property let's you control how long an animation takes to complete.
                </p>
                <p>
                    You can try out how different values affect the animation by moving the slider below:
                </p>
                <div>
                    <input type='range' min='0.5' max='10' step='0.5' value={duration} onChange={onSliderChange} /> {`${duration}s`}
                </div>
            </div>
            <div className='centered-demo'>
                <RotatingCube duration={duration} />
            </div>
        </section>
    )
}
