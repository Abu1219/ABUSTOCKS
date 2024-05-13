import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Loader from "./Components/Utility/Loader";

import Nav from "./Components/Utility/Nav";
function App() {
  return (
    <div className="bg-white/20   mx-auto  ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
