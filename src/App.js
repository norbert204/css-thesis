import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Styles/reset.css'
import './Styles/theme.css'
import './Styles/common.css'
import styles from './App.module.css'
import Slideshow from './Components/Common/Slideshow/Slideshow'
import PortraitModeDialog from './Components/Common/PortraitModeDialog/PortraitModeDialog'
import IntroductionSectionTitle from './Components/Slides/Introduction/IntroductionSectionTitle/IntroductionSectionTitle'
import AboutPresentation from './Components/Slides/Introduction/AboutPresentation/AboutPresentation'
import TransitionSectionTitle from './Components/Slides/Transition/TransitionSectionTitle/TransitionSectionTitle'
import TransitionProperty from './Components/Slides/Transition/TransitionProperty/TransitionProperty'
import TransitionPropertyProperty from './Components/Slides/Transition/TransitionPropertyProperty/TransitionPropertyProperty'
import TransitionTimingFunction from './Components/Slides/Transition/TransitionTimingFunction/TransitionTimingFunction'
import EasingFunctionLinear from './Components/Slides/Transition/EasingFunctionLinear/EasingFunctionLinear'
import EasingFunctionBezier from './Components/Slides/Transition/EasingFunctionBezier/EasingFunctionBezier'
import EasingFunctionSteps from './Components/Slides/Transition/EasingFunctionSteps/EasingFunctionSteps'
import ExampleMadEmoji from './Components/Slides/Transition/ExampleMadEmoji/ExampleMadEmoji'
import AnimationSectionTitle from './Components/Slides/Animation/AnimationSectionTitle/AnimationSectionTitle'
import AnimationProperty from './Components/Slides/Animation/AnimationProperty/AnimationProperty'
import AnimationNameProperty from './Components/Slides/Animation/AnimationNameProperty/AnimationNameProperty'
import AnimationDuration from './Components/Slides/Animation/AnimationDuration/AnimationDuration'
import AnimationTimingFunction from './Components/Slides/Animation/AnimationTimingFunction/AnimationTimingFunction'
import AnimationTimelineProperty from './Components/Slides/Animation/AnimationTimelineProperty/AnimationTimelineProperty'
import ExampleMario from './Components/Slides/Animation/ExampleMario/ExampleMario'
import ExampleBlur from './Components/Slides/Filter/ExampleBlur/ExampleBlur'
import Example3dRoom from './Components/Slides/Examples/Example3dRoom/Example3dRoom'
import BackgroundDiscrete from './Components/Slides/Animation/BackgroundDiscrete/BackgroundDiscrete'
import AnimationCompositionProperty from './Components/Slides/Animation/AnimationCompositionProperty/AnimationCompositionProperty'
import FilterSectionTitle from './Components/Slides/Filter/FilterSectionTitle/FilterSectionTitle'

export default function App() {
    const { page } = useParams()

    const slides = [
        IntroductionSectionTitle,
        AboutPresentation,
        TransitionSectionTitle,
        TransitionProperty,
        TransitionPropertyProperty,
        TransitionTimingFunction,
        EasingFunctionLinear,
        EasingFunctionBezier,
        EasingFunctionSteps,
        ExampleMadEmoji,
        AnimationSectionTitle,
        BackgroundDiscrete,
        AnimationProperty,
        AnimationNameProperty,
        AnimationDuration,
        AnimationTimingFunction,
        AnimationTimelineProperty,
        AnimationCompositionProperty,
        ExampleMario,
        FilterSectionTitle,
        ExampleBlur,
        Example3dRoom,
    ]

    const [slideIndex, setSlideIndex] = useState(() => {
        if (page) {
            const index = parseInt(page) - 1

            if (index >= 0 && index < slides.length) {
                return index
            }
        }

        return 0
    })

    return (
        <>
            <main className={styles['content']}>
                <Slideshow slides={slides} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
            </main>
            <PortraitModeDialog />
        </>
    )
}
