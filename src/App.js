import "./App.scss";
import { CssBaseline } from "@mui/material";
import CategoryDetail from "./pages/categoryDetail";
import Home from "./pages/home";
import Nav from "./component/nav/nav";
import Footer from "./component/footer";
import { destinations } from "./data/destination.jsx";
import User from "./context/user";
// import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignedIn from "./pages/signedIn";
import DestinationDetail from "./pages/destinationDetail";

function App() {
  return (
    <User>
      <Router>
        <CssBaseline />
        <Nav />ç
        <Routes>
          <Route path="" element={<Home destinations={destinations} />} />
          <Route path="/DestinationDetail" element={<DestinationDetail />} />
          <Route path="/signedIn" element={<SignedIn />} />
        </Routes>
        <Footer />
      </Router>
    </User>
  );
}

export default App;
