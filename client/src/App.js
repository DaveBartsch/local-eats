import "./App.css";
import FarmStandData from "./components/FarmStandData";
import { useState, useEffect } from "react";
import NewFarmStandForm from "./components/NewFarmStandForm";
import DetailComponent from "./pages/DetailComponent";
import FarmStandsList from "./components/FarmStandsList";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateFarmStand from "./pages/CreateFarmStand";
import EditFarmStand from "./pages/EditFarmStand";



function App() {
  return (
    <div className="App">
      <header>
        <h1>Calgary Farm Stands</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailComponent />} />
        <Route path="/add" element={<CreateFarmStand />} />
        <Route path="/edit/:id" element={<EditFarmStand />} />
      </Routes>
    </div>
  );
}

export default App;
