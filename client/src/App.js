import "./App.css";
import FarmStandData from "./components/FarmStandData";
import { useState, useEffect } from "react";

function App() {
  const [farmStandList, setFarmStandList] = useState();
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
   if(farmStandList===undefined){
    return <div>Loading...</div>
   } else {

  return (
    <div className="App">
      <header>
        <h1>Farm Stands</h1>
      </header>
      { farmStandList.map((farmStand) => {
        return <FarmStandData farmStand={farmStand} />;
      })}
    </div>
  );
    }
}

export default App;
