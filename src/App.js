import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Show from "./pages/show/Show";
import Search from "./pages/search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/show" element={<Show />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
