import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";

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
      <Typography variant="h4">Farm Stands in NE Calgary:</Typography>
      {northeastList ? (
        northeastList.map((farmStand) => {
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

export default NortheastList;
