import { Await, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import { Suspense } from "react";

function EventsEditPage() {
  const { eventDetails } = useRouteLoaderData("event-detail");
  return (
    <Suspense
      fallback={
        <p
          style={{
            textAlign: "center",
          }}
        >
          Loading...
        </p>
      }
    >
      <Await resolve={eventDetails}>
        {(event) => <EventForm event={event} />}
      </Await>
    </Suspense>
  );
}
export default EventsEditPage;
