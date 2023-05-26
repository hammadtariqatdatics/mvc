import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
