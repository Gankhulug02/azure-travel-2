import "./App.css";
import { CssBaseline } from "@mui/material";
import Login from "./pages/login";
import Home from "./pages/home";
import Nav from "./component/nav/nav";

// import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignedIn from "./pages/signedIn";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        {/* <Route path="" element={<Login />} /> */}
        <Route path="/signedIn" element={<SignedIn />} />
      </Routes>
    </Router>
  );
}

export default App;
