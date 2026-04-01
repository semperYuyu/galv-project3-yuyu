import Login from "./Login";
import Register from "./Register";
import API from "./API";
import Home from "./Home";
import Spawn from "./Spawn";
import { ThemeContext } from "../contexts/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

export default function NotRoot() {
  let [theme, setTheme] = useState(null);
  let themeObj = { theme, setTheme };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeObj}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/api" element={<API />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Spawn />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
