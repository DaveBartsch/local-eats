import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";

const NortheastList = () => {
  const [northeastList, setNortheastList] = useState();
  useEffect(() => {
    const getNortheastList = async () => {
      try {
        const response = await fetch("/farm_stands/ne");
        const farmstands = await response.json();
        console.log(`Farm stands are:${farmstands}`);
        return setNortheastList(farmstands);
      } catch (ex) {
        console.log(ex);
      }
    };
    getNortheastList();
  }, []);

  return (
    <div>
      {northeastList ? (
        northeastList.map((farmStand) => {
          return <FarmStandDisplay farmStand={farmStand} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default NortheastList;
