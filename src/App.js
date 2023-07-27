import React from "react";
import { Routes, Route } from "react-router-dom";
import BoardList from "./components/BoardList";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<BoardList />} />
      </Routes>
    </>
  );
}

export default App;
