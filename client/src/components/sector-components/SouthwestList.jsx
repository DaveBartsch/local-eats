import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const SouthwestList = () => {
  const [southwestList, setSouthwestList] = useState();
  useEffect(() => {
    const getSouthwestList = async () => {
      try {
        const response = await fetch("/farm_stands/nw");
        const farmstands = await response.json();
        console.log(`Farm stands are:${farmstands}`);
        return setSouthwestList(farmstands);
      } catch (ex) {
        console.log(ex);
      }
    };
    getSouthwestList();
  }, []);

  return (
    <div>
      {southwestList ? (
        southwestList.map((farmStand) => {
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

export default SouthwestList;
