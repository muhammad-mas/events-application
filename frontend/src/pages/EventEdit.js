import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EventsEditPage() {
  const data = useRouteLoaderData("event-details");
  return <EventForm event={data.event} method="PATCH"></EventForm>;
}
export default EventsEditPage;
