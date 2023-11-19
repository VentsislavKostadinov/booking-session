import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home'
import Root from '../pages/Root'
import SessionPage from '../pages/Session'
import { SessionsPage } from '../pages/Sessions'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            { path: 'sessions', element: <SessionsPage /> },
            { path: 'sessions/:id', element: <SessionPage /> },
        ],
    },
])
