import { SessionProps } from './SessionProps'
import { SessionStateProps } from './SessionStateProps'

export type SessionContextValueProps = SessionStateProps & {
    bookSession: (session: SessionProps) => void
    cancelSession: (sessionId: string) => void
}
