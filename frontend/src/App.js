import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Loader from "./Components/Utility/Loader";
import SingleStocketails from "./Components/SingleStocketails";

import Nav from "./Components/Utility/Nav";
function App() {
  return (
    <div className="mx-auto overflow-x-hidden bg-white/20 ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/stock_details" element={<SingleStocketails />} />
      </Routes>
    </div>
  );
}

export default App;
