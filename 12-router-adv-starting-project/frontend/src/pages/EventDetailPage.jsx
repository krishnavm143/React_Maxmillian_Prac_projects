import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EventDetailPage = () => {
   const navigate= useNavigate()
    const { eventId } = useParams()
    const NavigateTo=()=>{
        // navigate(${`..`})
    }
    return (
        <>
            <h1>EventDetailPage</h1>
            <p>{eventId}</p>
            <button onClick={NavigateTo}>Back</button>
        </>
    )
}

export default EventDetailPage