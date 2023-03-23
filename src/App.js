import { BrowserRouter as Router, Link, Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Flex from "./Flex";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="flex">Flex </Link>
        <Link to="image">Image gradient</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flex" element={<Flex />} />
        
      </Routes>
    </Router>
  )
}


export default App;