import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import Loader from "./Components/Utility/Loader";
import SingleStocketails from "./Components/SingleStocketails";
import Login from "./Components/Login";
import Nav from "./Components/Utility/Nav";
import Register from "./Components/Register";
import Watchlist from "./Components/Watchlist";
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/Utility/PrivateRoute";
function App() {
  return (
    <div className="mx-auto bg-white/20 ">
      <Nav />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Watchlist" element={<Watchlist />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/:id/stock_details" element={<SingleStocketails />} />
      </Routes>
    </div>
  );
}

export default App;
