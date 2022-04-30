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
import NorthwestList from "./pages/sector-pages/NorthwestPage";
import NortheastList from "./pages/sector-pages/NortheastPage";
import SoutheastList from "./pages/sector-pages/SoutheastPage";
import SouthwestList from "./pages/sector-pages/SouthwestPage";

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
        <Route path="/ne" element={<NortheastList />} />
        <Route path="/nw" element={<NorthwestList />} />
        <Route path="/se" element={<SoutheastList />} />
        <Route path="/sw" element={<SouthwestList />} />
      </Routes>
    </div>
  );
}

export default App;
