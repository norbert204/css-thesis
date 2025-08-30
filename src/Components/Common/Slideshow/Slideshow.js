import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Slideshow.module.css'
import { ReactComponent as TriangleIcon } from './triangle.svg'

export default function Slideshow({ slides, slideIndex, setSlideIndex }) {
    const Slide = slides[slideIndex]

    const navigate = useNavigate()

    const previousExists = slideIndex > 0
    const nextExists = slideIndex < (slides.length - 1)

    function previousSlide() {
        setSlideIndex(x => {
            let index = x - 1

            if (index < 0) {
                index = 0
            }

            navigate(`/${index + 1}`, { replace: true })

            return index
        })
    }

    function nextSlide() {
        setSlideIndex(x => {
            let index = x + 1

            if (index >= slides.length) {
                index = slides.length - 1
            }

            navigate(`/${index + 1}`, { replace: true })

            return index
        })
    }

    return (
        <div className={ styles['container'] }>
            <div className={ styles['slide'] }>
                <Slide />
            </div>
            <nav className={ styles['controls']}>
                <div className={ styles['steppers'] }>
                    <button className={ styles['stepper-button'] } onClick={ previousSlide } disabled={ !previousExists }>
                        <TriangleIcon />
                    </button>
                    <button className={ styles['stepper-button'] } onClick={ nextSlide } disabled={ !nextExists }>
                        <TriangleIcon />
                    </button>
                </div>
                <span>{ (slideIndex + 1) }{ '/' }{ slides.length }</span>
            </nav>
        </div>
    )
}
