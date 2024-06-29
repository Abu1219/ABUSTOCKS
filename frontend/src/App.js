import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Loader from "./Components/Utility/Loader";
import SingleStocketails from "./Components/SingleStocketails";
import Login from "./Components/Login";
import Nav from "./Components/Utility/Nav";
import Register from "./Components/Register";
import Watchlist from "./Components/Watchlist";
function App() {
  return (
    <div className="mx-auto overflow-x-hidden bg-white/20 ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Watchlist" element={<Watchlist />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:id/stock_details" element={<SingleStocketails />} />
      </Routes>
    </div>
  );
}

export default App;
