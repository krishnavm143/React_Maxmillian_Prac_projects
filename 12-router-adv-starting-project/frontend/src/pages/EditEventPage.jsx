import React from 'react'
import EventForm from '../components/EventForm'
import { useLoaderData } from 'react-router-dom'

const EditEventPage = () => {
  const { event } = useLoaderData()
  console.log(event)
  return (
    <>
      <EventForm event={event} />
    </>
  )
}

export default EditEventPage