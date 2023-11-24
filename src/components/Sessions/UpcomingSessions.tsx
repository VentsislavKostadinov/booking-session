import { useEffect, useRef } from 'react'
import { ModalHandleProps } from '../../model/ModalProps'
import { Modal } from '../../UI/Modal'
import { useSessionsContext } from '../../store/sessions-context'
import { NavigateElement } from '../../UI/NavigateElement'
import { UpcomingSessionsProps } from '../../model/SessionProps/UpcomingSessionsProps'
import { UpcomingSession } from './UpcomingSession'
import data from '../../dummy-texts.json'

export const UpcomingSessions = ({ onClose }: UpcomingSessionsProps) => {
    const modal = useRef<ModalHandleProps>(null)
    const sessionsCtx = useSessionsContext()

    useEffect(() => {
        if (modal.current) {
            modal.current.open()
        }
    }, [])

    const handleCancelSession = (sessionId: string) => {
        sessionsCtx.cancelSession(sessionId)
    }

    const hasSessions = sessionsCtx.upcomingSessions.length > 0

    return (
        <Modal ref={modal} onClose={onClose}>
            <h2>{data.navigation.upcomingSessions}</h2>
            {hasSessions && (
                <ul>
                    {sessionsCtx.upcomingSessions.map((session) => (
                        <li key={session.id}>
                            <UpcomingSession
                                session={session}
                                onCancel={() => handleCancelSession(session.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}

            {!hasSessions && <p>{data.session.noSessionFound}</p>}
            <p className="actions">
                <NavigateElement onClick={onClose}>
                    {data.session.closeText}
                </NavigateElement>
            </p>
        </Modal>
    )
}
