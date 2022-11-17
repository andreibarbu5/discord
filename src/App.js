import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardPage from "./components/CardPage";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
