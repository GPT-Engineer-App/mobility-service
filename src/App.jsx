import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import TripPlanner from "./pages/TripPlanner.jsx";
import TripDetails from "./pages/TripDetails.jsx";
import Payment from "./pages/Payment.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import RateTrip from "./pages/RateTrip.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/trip-details" element={<TripDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/rate-trip" element={<RateTrip />} />
      </Routes>
    </Router>
  );
}

export default App;
