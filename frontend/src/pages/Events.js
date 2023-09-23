// import { useEffect, useState } from "react";

import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();
  // if we do return an object with isError Property from loader
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/events");

  //     if (!response.ok) {
  //       setError("Fetching events failed.");
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  return (
    // <>
    //   <div style={{ textAlign: "center" }}>
    //     {isLoading && <p>Loading...</p>}
    //     {error && <p>{error}</p>}
    //   </div>
    //   {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    // </>
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
  );
}

export default EventsPage;

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
    return resData.events;
    // setFetchedEvents(resData.events);
  }
}
export function loader() {
  return defer({
    // must return a promise
    events: loadEvents(),
  });
}
