import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Mainroutes from "./Routes/Mainroutes";
import { useEffect } from "react";
import { asyncLoadProduct } from "./store/actions/ProductAction";
import { asyncCurrentUser } from "./store/actions/UserAction";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncLoadProduct());
  }, []);

  useEffect(() => {
    !user && dispatch(asyncCurrentUser());
  }, [user]);

  return (
    <>
      <Mainroutes />
    </>
  );
}

export default App;
