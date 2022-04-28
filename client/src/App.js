import "./App.css";
import FarmStandData from "./components/FarmStandData";
import { useState, useEffect } from "react";
import NewFarmStandForm from "./components/NewFarmStandForm";
import DetailComponent from "./components/DetailComponent";

function App() {
  const [farmStandList, setFarmStandList] = useState();
  const [showModal, setShowModal] = useState(false);
  console.log(`Farm Stands list: ${JSON.stringify(farmStandList)}`);

  useEffect(() => {
    getFarmStandsList();
  }, []);

  const getFarmStandsList = async () => {
    try {
      const response = await fetch("/farm_stands/");
      const farmstands = await response.json();
      console.log(`Farm stands are:${farmstands}`);
      return setFarmStandList(farmstands);
    } catch (ex) {
      console.log(ex);
    }
  };
  if (farmStandList === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <header>
          <DetailComponent id={"626ab7e75ec39ead7764187a"} />
          <h1>Farm Stands</h1>
        </header>
        {farmStandList.map((farmStand) => {
          return <FarmStandData farmStand={farmStand} />;
        })}
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          {" "}
          Add a new FarmStand
        </button>
        {showModal && <NewFarmStandForm setShowModal={setShowModal} />}
        <DetailComponent id={"626ab7e75ec39ead7764187a"} />
      </div>
    );
  }
}

export default App;
