import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ModalHandleProps, ModalProps } from '../model/ModalProps'

export const Modal = forwardRef<ModalHandleProps, ModalProps>(function Modal(
    { children, onClose },
    ref,
) {
    const dialog = useRef<HTMLDialogElement>(null)

    // useImperativeHandle is used to expose the `open` method to other components
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                if (dialog.current) {
                    dialog.current.showModal() // showModal() is a built-in method available on the <dialog> element
                }
            },
        }
    })

    // Below, the onClose prop is set on <dialog> to handle the case that the user closes the modal via a built-in mechanism (ESC key)
    return createPortal(
        <dialog ref={dialog} className="modal" onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal-root')!,
    )
})
