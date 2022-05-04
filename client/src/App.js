import "./App.css";
import DetailComponent from "./pages/DetailComponent";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateFarmStand from "./pages/CreateFarmStand";
import EditFarmStand from "./pages/EditFarmStand";
import NavBar from "./components/NavBar";
import NortheastList from "./components/sector-components/NortheastList";
import NorthwestList from "./components/sector-components/NorthwestList";
import SoutheastList from "./components/sector-components/SoutheastList";
import SouthwestList from "./components/sector-components/SouthwestList";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
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
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
