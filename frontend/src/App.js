import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LocationsCarousel from "./components/LocationsCarousel";
import Packages from "./components/Packages";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/Faq";
import LoginSignup from "./pages/LoginSignup";

function MainRoutes() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<><Hero /><LocationsCarousel /><Packages /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      {!["/about", "/register", "/contact", "/privacy", "/terms", "/faq", "/login"].includes(location.pathname) && <Footer />}
    </>
  );
}

export default function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    function handleUsernameChange(event) {
      setUsername(event.detail);
    }
    window.addEventListener("username-changed", handleUsernameChange);
    return () => window.removeEventListener("username-changed", handleUsernameChange);
  }, []);

  return (
    <Router>
      <Header username={username} setUsername={setUsername} />
      <MainRoutes />
    </Router>
  );
}
