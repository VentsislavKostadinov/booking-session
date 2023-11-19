import { SESSIONS } from '../dummy-sessions' // normally, we would probably load that from a server
import data from '../dummy-texts.json'

export default function SessionsPage() {
    return (
        <main id="sessions-page">
            <header>
                <h2>{data.session.headline}</h2>
                <p>{data.session.title}</p>
            </header>
            {/* Todo: Output list of sessions */}
        </main>
    )
}
