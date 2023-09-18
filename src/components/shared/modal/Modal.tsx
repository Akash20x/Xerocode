"use client"
import { useRef, useEffect } from 'react'
import styles from "./modal.module.css"


type Props = {
    title: string,
    onOk: () => void,
    onClose: () => void,
    onOpen: boolean,
    children: React.ReactNode,
}

export default function Modal({ title, onOpen, onOk, onClose, children }: Props) {

    const modalRef = useRef<null | HTMLDialogElement>(null)
 
    
  useEffect(() => {
    // Open the dialog when onOpen is true
    if (onOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [onOpen]);

    const closeDialog = () => {
        modalRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    } 

    const modal = 
        (
            <dialog ref={modalRef} className={styles.modal}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>{title}</h1>
                        <button
                            onClick={closeDialog}
                            className={styles.closebtn}
                        >x</button>
                    </div>
                    <div className={styles.modalbody}>
                        {children}
                            <button onClick={clickOk}>
                                Update
                            </button>
                    </div>
            </dialog>
        )


    return modal
}