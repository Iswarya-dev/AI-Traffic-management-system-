import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/components/Navbar";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import TrafficSignals from "./pages/TrafficSignals";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/traffic" element={<TrafficSignals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;