import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";

const SoutheastList = () => {
  const [southeastList, setSoutheastList] = useState();
  useEffect(() => {
    const getSoutheastList = async () => {
      try {
        const response = await fetch("/farm_stands/ne");
        const farmstands = await response.json();
        console.log(`Farm stands are:${farmstands}`);
        return setSoutheastList(farmstands);
      } catch (ex) {
        console.log(ex);
      }
    };
    getSoutheastList();
  }, []);

  return (
    <div>
      {southeastList ? (
        southeastList.map((farmStand) => {
          return <FarmStandDisplay farmStand={farmStand} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SoutheastList;
