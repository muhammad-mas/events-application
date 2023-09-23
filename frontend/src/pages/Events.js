import EventsList from "../components/EventsList";
import img from "../assets/e1.jpg";
const EVENTS = [
  {
    id: "e1",
    image: img,
    title: "Event 1",
    content: "This is newest event",

    date: "23/09/23",
  },
  {
    id: "e2",
    image: img,
    title: "Event 2",
    content: "This is second event",

    date: "26/09/23",
  },
];
function EventsPage() {
  return (
    <>
      <h1>Event Page</h1>
      <EventsList events={EVENTS} />
    </>
  );
}
export default EventsPage;
