import React from "react";
import { json, useNavigate, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const navigate = useNavigate();
  const data=useLoaderData()
  // const { eventId } = useParams();
  const NavigateTo = () => {
    // navigate(${`..`})
  };
  return (
    <>
      <EventItem event={data.event}/>
    </>
  );
};

export default EventDetailPage;

export async function loader({request,params}){
  const id=params.eventId


  const response = await  fetch('http://localhost:8080/events/'+id);

  if(!response.ok){
    throw json({
      message:'Could Fetch the details for selected events',
      status:500
    })
  }else{
    return response
  }
}