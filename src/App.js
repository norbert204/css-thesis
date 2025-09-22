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
import AnimationSectionTitle from './Components/Slides/Animation/AnimationSectionTitle/AnimationSectionTitle'
import AnimationProperty from './Components/Slides/Animation/AnimationProperty/AnimationProperty'
import AnimationDuration from './Components/Slides/Animation/AnimationDuration/AnimationDuration'
import ExampleMario from './Components/Slides/Animation/ExampleMario/ExampleMario'
import ExampleBlur from './Components/Slides/Filter/ExampleBlur/ExampleBlur'
import Example3dRoom from './Components/Slides/Examples/Example3dRoom/Example3dRoom'
import FilterSectionTitle from './Components/Slides/Filter/FilterSectionTitle/FilterSectionTitle'

export default function App() {
    const { page } = useParams()

    const slides = [
        IntroductionSectionTitle,
        AboutPresentation,
        TransitionSectionTitle,
        TransitionProperty,
        TransitionPropertyProperty,
        AnimationSectionTitle,
        AnimationProperty,
        AnimationDuration,
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
            <main className={ styles['content'] }>
                <Slideshow slides={ slides } slideIndex={ slideIndex } setSlideIndex={ setSlideIndex } />
            </main>
            <PortraitModeDialog />
        </>
    )
}
