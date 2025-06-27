import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Mainroutes from "./Routes/Mainroutes";
import { useEffect } from "react";
import { asyncLoadProduct } from "./store/actions/ProductAction";
import { asyncCurrentUser } from "./store/actions/UserAction";
import { useLocation } from "react-router-dom"; // 🔸 Step 1: Import location


function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const location = useLocation(); // 🔸 Step 2: Get current path

  useEffect(() => {
    dispatch(asyncLoadProduct());
  }, []);

  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);

  // 🔸 Step 3: Check if current route is signin/signup
  const hideNavbarPaths = ["/signin", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />} {/* 🔸 Step 4: Conditionally render */}
      <Mainroutes />
    </>
  );
}

export default App;
