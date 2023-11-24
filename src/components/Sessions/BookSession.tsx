import { FormEvent, useEffect, useRef } from 'react'
import { Modal } from '../../UI/Modal.tsx'
import { ModalHandleProps } from '../../model/ModalHandleProps.ts'
import { Input } from '../../UI/Input.tsx'
import { NavigateElement } from '../../UI/NavigateElement.tsx'
import { useSessionsContext } from '../../store/sessions-context.tsx'
import { BookSessionProps } from '../../model/SessionProps/BookSessionProps.ts'
import data from '../../dummy-texts.json'

export const BookSession = ({ session, onDone }: BookSessionProps) => {
    const modal = useRef<ModalHandleProps>(null)
    const sessionsCtx = useSessionsContext()

    // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
    useEffect(() => {
        if (modal.current) {
            modal.current.open()
        }
    }, [])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        console.log(data) // would normally be sent to a server, together with session data
        sessionsCtx.bookSession(session)
        onDone()
    }

    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>{data.session.bookSessionButton}</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your name" id="name" name="name" type="text" />
                <Input
                    label="Your email"
                    id="email"
                    name="email"
                    type="email"
                />
                <p className="actions">
                    <NavigateElement type="button" textOnly onClick={onDone}>
                        {data.session.cancelBookSession}
                    </NavigateElement>
                    <NavigateElement>
                        {data.session.bookSessionButton}
                    </NavigateElement>
                </p>
            </form>
        </Modal>
    )
}
