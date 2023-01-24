import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Bookmarked from "./pages/bookmarked/Bookmarked";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarked" element={<Bookmarked />} />
      </Routes>
    </div>
  );
}

export default App;
