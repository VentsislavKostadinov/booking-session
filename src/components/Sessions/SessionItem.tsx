import { SessionItemProps } from '../../model/SessionProps/SessionItemProps'
import { NavigateElement } from '../../UI/NavigateElement'
import data from '../../dummy-texts.json'

export const SessionItem = ({
    id,
    title,
    summary,
    image,
}: SessionItemProps) => {
    return (
        <article className="session-item">
            <img src={image} alt={title} />
            <div className="session-data">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <p className="actions">
                    <NavigateElement to={id}>
                        {data.session.learnMore}
                    </NavigateElement>
                </p>
            </div>
        </article>
    )
}
