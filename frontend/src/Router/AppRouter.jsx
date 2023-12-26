import React from "react";
import Navbar from "../component/Navbar";
import { Routes, Route } from "react-router-dom";
import ShowAll from "../Pages/ShowAll";
import AddGrocery from "../Pages/AddGrocery";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowAll />} />
        <Route path="/add" element={<AddGrocery />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
