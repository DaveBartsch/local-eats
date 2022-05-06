import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";

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
      <Typography variant="h4">Farm Stands in SE Calgary:</Typography>

      {southeastList ? (
        southeastList.map((farmStand) => {
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

export default SoutheastList;
