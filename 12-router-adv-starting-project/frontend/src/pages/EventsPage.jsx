import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Some Event'
    },
    {
        id: 'e2',
        title: 'Some Event'
    },
    {
        id: 'e3',
        title: 'Some Event'
    },
    {
        id: 'e4',
        title: 'Some Event'
    },
    {
        id: 'e5',
        title: 'Some Event'
    },
]

const EventsPage = () => {
    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {
                    DUMMY_EVENTS.map(event => <li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>)
                }
            </ul>
        </>
    )
}

export default EventsPage