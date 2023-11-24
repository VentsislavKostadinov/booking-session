import { ReactNode } from 'react'

// This type is used with `forwardRef` to ensure that the `Modal` component can be used with `useImperativeHandle` to expose a `open` method
export type ModalHandleProps = {
    open: () => void
}

export type ModalProps = {
    children: ReactNode
    onClose: () => void // The onClose function prop is used to propagate the default "close" event that can be triggered by <dialog> (for example, when the ESC key is pressed)
}
