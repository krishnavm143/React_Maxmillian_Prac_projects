import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData()

    if (data.isError) {
        return <p>{data.message}</p>
    }



    const events = data.events

    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/eventsajdssakjdfbdslkjfbjdskb');

    if (!response.ok) {
        // 
        return {
            isError: true,
            message: 'Could not fetch the events'
        }
    } else {
        // const resData = await response.json();

        // return resData.events;
        return response
    }

}