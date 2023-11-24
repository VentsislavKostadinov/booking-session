import { UpcomingSessionProps } from '../../model/SessionProps/UpcomingSessionProps'
import { NavigateElement } from '../../UI/NavigateElement'
import data from '../../dummy-texts.json'

export const UpcomingSession = ({
    session,
    onCancel,
}: UpcomingSessionProps) => {
    return (
        <article className="upcoming-session">
            <div>
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <time dateTime={new Date(session.date).toISOString()}>
                    {new Date(session.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </time>
            </div>
            <p className="actions">
                <NavigateElement textOnly onClick={onCancel}>
                    {data.session.cancelBookSession}
                </NavigateElement>
            </p>
        </article>
    )
}
