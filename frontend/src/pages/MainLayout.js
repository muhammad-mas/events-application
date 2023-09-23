import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function MainLayout() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <Outlet></Outlet>
    </>
  );
}
export default MainLayout;
