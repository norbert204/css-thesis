import { useImperativeHandle, useRef } from "react"
import styles from './Dialog.module.css'

export default function Dialog({ ref, children }) {
    const dialogRef = useRef(null)

    useImperativeHandle(ref, () => {
        return {
            show() {
                dialogRef.current.showModal()
            }
        }
    }, [])

    function closeDialog() {
        dialogRef.current.close()
    }

    return (
        <dialog ref={dialogRef} className={styles["dialog"]}>
            <div className={styles["dialog-container"]}>
                <div className={styles["dialog-header"]}>
                    <button onClick={closeDialog} aria-label="Close">&#x2717;</button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </dialog>
    )
}
