import { useEffect, useState } from 'react'
import styles from './ExampleBlur.module.css'

export default function ExampleBlur() {
    const [glassPosition, setGlassPosition] = useState({ x: 0, y: 0 })
    const [glassClicked, setGlassClicked] = useState(false)

    useEffect(() => {
        const glassElement = document.querySelector(`.${styles.glass}`.replace("+", "\\+"))
        const glassElementRect = glassElement.getBoundingClientRect()
        const glassContainerRect = glassElement.parentElement.getBoundingClientRect()

        function onMouseMove(event) {
            if (!glassClicked) {
                return
            }

            let left = event.clientX - glassContainerRect.left - glassElementRect.width / 2
            let top = event.clientY - glassContainerRect.top - glassElementRect.height / 2

            if (left < 0) {
                left = 0
            }
            else if (left > glassContainerRect.width - glassElementRect.width) {
                left = glassContainerRect.width - glassElementRect.width
            }

            if (top < 0) {
                top = 0
            }
            else if (top > glassContainerRect.height - glassElementRect.height) {
                top = glassContainerRect.height - glassElementRect.height
            }

            setGlassPosition({
                x: left,
                y: top,
            })

            glassElement.style.setProperty('--glass-x', `${glassPosition.x}px`)
            glassElement.style.setProperty('--glass-y', `${glassPosition.y}px`)
        }

        function onPointerDown() {
            setGlassClicked(true)
        }

        function onPointerUp() {
            setGlassClicked(false)
        }

        // TODO: Fix the background position calculation
        glassElement.children[0].style.setProperty('background-position', `left ${glassContainerRect.left}px top ${glassContainerRect.top}px`)

        glassElement.addEventListener('pointerdown', onPointerDown)
        glassElement.addEventListener('pointerup', onPointerUp)

        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            glassElement.removeEventListener('pointerdown', onPointerDown)
            glassElement.removeEventListener('pointerup', onPointerUp)
        }
    })

    return (
        <>
            <h1>{ 'Draggable glass' }</h1>
            <div className={ styles.container }>
                <div className={ styles.image }>
                    <div className={ styles.glass }>
                        <div className={ styles['glass-image'] }></div>
                    </div>
                </div>
            </div>
        </>
    )
}
