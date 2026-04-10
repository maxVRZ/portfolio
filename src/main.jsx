import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactMe from "./pages/contactme.jsx"; 
import Projects from "./pages/Projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);