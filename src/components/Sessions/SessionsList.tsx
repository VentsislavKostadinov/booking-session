import { SessionsListProps } from '../../model/SessionsListProps'
import { SessionItem } from './SessionItem'

export const SessionsList = ({ sessions }: SessionsListProps) => {
    return (
        <ul id="sessions-list">
            {sessions.map((session) => (
                <li key={session.id}>
                    <SessionItem {...session} />
                </li>
            ))}
        </ul>
    )
}
