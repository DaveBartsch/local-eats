import "./App.css";
import DetailComponent from "./pages/DetailComponent";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateFarmStand from "./pages/CreateFarmStand";
import EditFarmStand from "./pages/EditFarmStand";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LogInPage";
import Logout from "./components/LogOut";
import NortheastList from "./components/sector-components/NortheastList";
import NorthwestList from "./components/sector-components/NorthwestList";
import SoutheastList from "./components/sector-components/SoutheastList";
import SouthwestList from "./components/sector-components/SouthwestList";
import LandingPage from "./pages/LandingPage";
import InfoPage from "./pages/InfoPage";
import RecipePage from "./pages/RecipePage";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  console.log(`loggedInUser: ${JSON.stringify(loggedInUser)}`);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/1429640.jpg")`,
      }}
    >
      <header>
        <NavBar loggedInUser={loggedInUser} />
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/all" element={<HomePage />} />
        <Route
          path="/details/:id"
          element={<DetailComponent loggedInUser={loggedInUser} />}
        />
        <Route path="/add" element={<CreateFarmStand />} />
        <Route path="/edit/:id" element={<EditFarmStand />} />
        <Route
          path="/login"
          element={<LoginPage setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="/logout"
          element={<Logout setLoggedInUser={setLoggedInUser} />}
        />
        <Route path="/ne" element={<NortheastList />} />
        <Route path="/nw" element={<NorthwestList />} />
        <Route path="/se" element={<SoutheastList />} />
        <Route path="/sw" element={<SouthwestList />} />
        <Route path="/sw" element={<SouthwestList />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
