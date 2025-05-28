import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default App;
