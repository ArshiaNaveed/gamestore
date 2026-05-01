import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import "./App.css";
import Navbar from "./components/shared/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/games" element={<h1>Games</h1>} />
          <Route path="/help" element={<h1>help</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
