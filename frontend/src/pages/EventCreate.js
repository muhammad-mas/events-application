import EventForm from "../components/EventForm";

function EventsCreatePage() {
  // better approach i.e. using actions
  // const submitHandler = (event) => {
  //   event.preventDefault();

  // };
  return <EventForm method="POST" />;
}
export default EventsCreatePage;
