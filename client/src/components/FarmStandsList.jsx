import React, { useEffect, useState } from "react";
import FarmStandData from "./FarmStandData";

const FarmStandsList = () => {
  const [farmStandList, setFarmStandList] = useState();
  useEffect(() => {
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
    getFarmStandsList();
  }, []);

  return (
    <div>
      
      {
    farmStandList ? (
      farmStandList.map((farmStand) => {
        return <FarmStandData farmStand={farmStand}  />;
      })
    ) : (
      <div>Loading...</div>
    )
  }
    </div>
  
 )
};

export default FarmStandsList;
