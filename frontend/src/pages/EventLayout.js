import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventsLayout() {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </>
  );
}
export default EventsLayout;
