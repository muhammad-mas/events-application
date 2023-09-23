// useNavigation;
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function MainLayout() {
  //this must be used on any component currently on the screen.
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {/* {navigation.state === "loading" && <p>Loading ...</p>} */}
        <Outlet></Outlet>
      </main>
    </>
  );
}
export default MainLayout;
