import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home'
import Root from '../pages/Root'
import SessionPage from '../pages/SessionPage'
import { SessionsPage } from '../pages/SessionsPage'

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
