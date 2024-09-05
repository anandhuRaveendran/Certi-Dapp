import { Outlet,useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  const location = useLocation();
  const noNavBarRoutes = ['/view'];
  const shouldHideNavBar = noNavBarRoutes.includes(location.pathname);

  return (<>
    {!shouldHideNavBar && <NavBar />}
  <Outlet/> 
  </>
 )
}

export default MainLayout