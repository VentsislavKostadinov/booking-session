import { useParams } from 'react-router-dom'
import data from '../dummy-texts.json'
import { SESSIONS } from '../dummy-sessions'
import { NavigateElement } from '../UI/NavigateElement'
import { useState } from 'react'
import { BookSession } from '../components/Sessions/BookSession'

export default function SessionPage() {
    const params = useParams<{ id: string }>()
    const [isBooking, setIsBooking] = useState<boolean>(false)

    const sessionId = params.id
    const loadedSession = SESSIONS.find((session) => session.id === sessionId)
    if (!loadedSession) {
        return (
            <main id="session-page">
                <p>{data.session.noFoundSession}</p>
            </main>
        )
    }

    const handleStartBooking = () => {
        setIsBooking(true)
    }
    function handleStopBooking() {
        setIsBooking(false)
    }

    return (
        <main id="session-page">
            {isBooking && (
                <BookSession
                    session={loadedSession}
                    onDone={handleStopBooking}
                />
            )}
            <article>
                <header>
                    <img src={loadedSession.image} alt={loadedSession.title} />
                    <div>
                        <h2>{loadedSession.title}</h2>
                        <time
                            dateTime={new Date(
                                loadedSession.date,
                            ).toISOString()}
                        >
                            {new Date(loadedSession.date).toLocaleDateString(
                                'en-US',
                                {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                },
                            )}
                        </time>
                        <p>
                            <NavigateElement onClick={handleStartBooking}>
                                {data.session.bookSessionButton}
                            </NavigateElement>
                        </p>
                    </div>
                </header>
                <p id="content">{loadedSession.description}</p>
            </article>
        </main>
    )
}
