import { useState, React } from 'react'
import Loading from '../../../Common/Loading/Loading'

export default function AnimationDuration() {
    const [timing, setTiming] = useState('2s')
    const [timingValue, setTimingValue] = useState(2);

    function onSliderChange(e) {
        setTimingValue(e.target.value);
        setTiming(`${e.target.value}s`);
    }

    return (
        <section className='two-columns'>
            <div>
                <h1><code>{ 'animation-duration' }</code> property</h1>
                <p>
                    { 'This property let\'s you control how long an animation takes to complete.'}
                </p>
                <p>
                    { 'You can try out how different values affect the animation by moving the slider below:' }
                </p>
                <div>
                    <input type='range' min='0.5' max='5' step='0.1' value={ timingValue } onChange={ onSliderChange } />
                    <div>{ timing }</div>
                </div>
            </div>
            <div className='centered-demo' style={ { fontSize: '5rem' } }>
                <Loading timing={ timing } />
            </div>
        </section>
    )
}
