import React from "react";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import MyAppointment from "./components/my-appoinment/MyAppoinment";
import AllEngineers from "./components/all-engineers/AllEngineers";
import EngineerHiring from "./components/engineer-hiring/EngineerHiring";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-gray-200">
        <Navbar />
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineers" element={<AllEngineers />} />
          <Route path="/engineers/:speciality" element={<AllEngineers />} />
          <Route path="/hiring/:id" element={<EngineerHiring />} />
          <Route path="/my-appointment/:id" element={<MyAppointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
