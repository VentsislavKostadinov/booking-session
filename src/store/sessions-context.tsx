import { type ReactNode, createContext, useReducer, useContext } from 'react'
import { SessionProps } from '../model/SessionProps/SessionProps'
import { SessionStateProps } from '../model/SessionProps/SessionStateProps'
import { SessionContextValueProps } from '../model/SessionProps/SessionContextValueProps'
import { SessionsActionProps } from '../model/SessionProps/SessionAction/SessionsActionProps'

export const SessionsContext = createContext<SessionContextValueProps | null>(
    null,
)

export const useSessionsContext = () => {
    const context = useContext(SessionsContext)
    if (!context) {
        throw new Error(
            'useSessionsContext must be used within a SessionsContextProvider',
        )
    }
    return context
}

const sessionsReducer = (
    state: SessionStateProps,
    action: SessionsActionProps,
) => {
    if (action.type === 'BOOK_SESSION') {
        if (
            state.upcomingSessions.some(
                (session) => session.id === action.session.id,
            )
        ) {
            return state
        }
        return {
            upcomingSessions: state.upcomingSessions.concat(action.session),
        }
    }

    if (action.type === 'CANCEL_SESSION') {
        return {
            upcomingSessions: state.upcomingSessions.filter(
                (session) => session.id !== action.sessionId,
            ),
        }
    }

    return state
}

export const SessionsContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [sessionsState, dispatch] = useReducer(sessionsReducer, {
        upcomingSessions: [],
    })

    const bookSession = (session: SessionProps) => {
        dispatch({ type: 'BOOK_SESSION', session })
    }

    const cancelSession = (sessionId: string) => {
        dispatch({ type: 'CANCEL_SESSION', sessionId })
    }

    const ctxValue = {
        upcomingSessions: sessionsState.upcomingSessions,
        bookSession,
        cancelSession,
    }

    return (
        <SessionsContext.Provider value={ctxValue}>
            {children}
        </SessionsContext.Provider>
    )
}
