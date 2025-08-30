import styles from './Loading.module.css'

export default function Loading({ timing }) {
    return (
        <div className={ styles['loading'] }>
            <div style={ { animationDuration: timing } }></div>
        </div>
    )
}
