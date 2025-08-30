import React from 'react'
import styles from './PortraitModeDialog.module.css'

export default function PortraitModeDialog() {
    return (
        <div className={ styles['portrait-mode-dialog'] }>
            <div className={ styles['phone-animation'] }>
                <img src='phone.svg' className={ styles['phone'] } alt='Phone rotating to landscape orientation' />
                <img src='arrow.svg' className={ styles['arrow'] } alt='Arrow indicating rotation direction' />
            </div>
            <div className={ styles['info'] }>
                { 'This application is designed for landscape mode!' }<br />{ 'Please rotate your device!'}
            </div>
        </div>
    )
}
