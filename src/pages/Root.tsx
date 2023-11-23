import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/Navigation/Navigation'
import { SessionsContextProvider } from '../store/sessions-context.tsx'

export default function Root() {
    return (
        <SessionsContextProvider>
            <Navigation />
            <Outlet />
        </SessionsContextProvider>
    )
}
