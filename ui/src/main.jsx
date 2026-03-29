import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Login from "./Login";
import Register from "./Register";
import Database from "./Database";
import API from "./API";
import Home from "./Home";
import Spawn from "./Spawn";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/database" element={<Database />} />
        <Route path="/api" element={<API />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Spawn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
