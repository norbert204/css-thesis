import styles from './AboutPresentation.module.css'
import { ReactComponent as QuestionMark } from './QuestionMark.svg'

export default function AboutPresentation() {
    return (
        <section className='two-columns'>
            <div>
                <h2>{'About the presentation'}</h2>
                <p>
                    {'This presentation will demonstrate some Working Draft CSS features found under the '}
                    <a href="https://www.w3.org/Style/CSS/learning.en.html" target="_blank">{'W3C Web Standards'}</a>
                    {' that reached mainline web browser support.'}
                </p>
                <p>
                    {'Please note that this presentation was based on the 2024 snapshot of the standard, '}
                    {'so in the future features may\'ve already been moved out of Working Draft state!'}
                </p>
                <p>
                    {'The main features we are going to cover:'}
                    <ul>
                        <li><code>{'transition'}</code>{' property'}</li>
                        <li><code>{'animation'}</code>{' property'}</li>
                        <li><code>{'filter'}</code>{' property'}</li>
                    </ul>
                </p>
            </div>
            <div className="centered-demo">
                <div className={styles["animated-questionmark"]}>
                    <div className={styles["rotating-layer"]}>
                        <QuestionMark />
                    </div>
                </div>
            </div>
        </section>
    )
}
