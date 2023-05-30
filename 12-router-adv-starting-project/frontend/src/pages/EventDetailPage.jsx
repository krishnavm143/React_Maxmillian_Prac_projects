import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const NavigateTo = () => {
    // navigate(${`..`})
  };
  return (
    <>
      <EventItem />
    </>
  );
};

export default EventDetailPage;
