import {
  Await,
  defer,
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsDetailsPage() {
  // const params = useParams();

  const data = useRouteLoaderData("event-detail");
  // console.log(data);
  return (
    <>
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
        <Await resolve={data.eventDetails}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
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
        <Await resolve={data.events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // setError("Fetching events failed.");
    // one way to show errors
    // return { isError: true, message: "Couldn't fetch events." };
    // normal response
    // throw new Response(JSON.stringify({ message: "Couldn't fetch events." }), {
    //   status: 500,
    // });

    throw json({ message: "Couldn't fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log(resData.events);
    return resData.events;
    // setFetchedEvents(resData.events);
  }
}

async function loadEventDetails(params) {
  // console.log(params);
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      {
        message: "Could not fetch details for selected event.",
      },
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
}
export async function loader({ request, params }) {
  // request has url param
  return defer({
    events: loadEvents(),
    eventDetails: loadEventDetails(params),
  });

  // const id = params.id;
  // const response = await fetch("http://localhost:8080/events/" + id);
  // if (!response.ok) {
  //   throw json(
  //     {
  //       message: "Could not fetch details for selected event.",
  //     },
  //     {
  //       status: 500,
  //     }
  //   );
  // } else {
  //   return response;
  // }
}
export default EventsDetailsPage;
export async function action({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      {
        message: "Could not delete event.",
      },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
}
