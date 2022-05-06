import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";

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
      <Typography variant="h4">Farm Stands in NW Calgary:</Typography>

      {northwestList ? (
        northwestList.map((farmStand) => {
          return <FarmStandDisplay farmStand={farmStand} />;
        })
      ) : (
        <div>Loading...</div>
      )}

      <Link component={RouterLink} color="white" underline="none" to="/info">
        <Button variant="contained" color="success">
          MORE INFO
        </Button>
      </Link>
    </div>
  );
};

export default NorthwestList;
