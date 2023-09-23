import { useParams } from "react-router-dom";

function EventsDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Details Page</h1>
      {params.id}
    </>
  );
}
export default EventsDetailsPage;
