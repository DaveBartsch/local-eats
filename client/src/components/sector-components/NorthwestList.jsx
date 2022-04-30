import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";

const NorthwestList = () => {
  const [northwestList, setNorthwestList] = useState();
  useEffect(() => {
    const getNorthwestList = async () => {
      try {
        const response = await fetch("/farm_stands/nw");
        const farmstands = await response.json();
        console.log(`Farm stands are:${farmstands}`);
        return setNorthwestList(farmstands);
      } catch (ex) {
        console.log(ex);
      }
    };
    getNorthwestList();
  }, []);

  return (
    <div>
      {northwestList ? (
        northwestList.map((farmStand) => {
          return <FarmStandDisplay farmStand={farmStand} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default NorthwestList;
