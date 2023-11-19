import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import data from '../../dummy-texts.json'

//import UpcomingSessions from '../Sessions/UpcomingSessions.jsx'
import { NavigateElement } from '../../UI/NavigateElement'

export const Navigation = () => {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] =
        useState(false)

    function showUpcomingSessions() {
        setUpcomingSessionsVisible(true)
    }

    function hideUpcomingSessions() {
        setUpcomingSessionsVisible(false)
    }

    return (
        <>
            {/*  {upcomingSessionsVisible && (
                <UpcomingSessions onClose={hideUpcomingSessions} />
            )} 
          */}
            <header id="main-header">
                <NavLink to="/">
                    <h1>{data.navigation.title}</h1>
                </NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                                end
                            >
                                {data.navigation.mission}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/sessions"
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {data.navigation.sessions}
                            </NavLink>
                        </li>
                        <li>
                            <NavigateElement onClick={showUpcomingSessions}>
                                {data.navigation.upcomingSessions}
                            </NavigateElement>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
