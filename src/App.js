import "./App.css";
import { CssBaseline } from "@mui/material";
import Login from "./pages/login";
import Home from "./pages/home";
// import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
