import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEvent from "./components/AddEvents";
import List from "./components/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddEvent />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
