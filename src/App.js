import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Show from "./pages/show/Show";
import Search from "./pages/search/Search";

// ends
// "/search
// "/asset/{nasa_id}
// "/metadata/{nasa_id}
// "/captions/{nasa_id}
// "/album/{album_name}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Show />} />
        <Route path="/show" element={<Show />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
