import React, { useEffect, useState } from "react";
import FarmStandDisplay from "../FarmStandDisplay";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";

const SectorList = (props) => {
  const [sectorList, setSectorList] = useState();
  const citySector = props.citySector;

  useEffect(() => {
    const getSectorList = async () => {
      try {
        const response = await fetch(`/farm_stands/${citySector}`);
        const farmstands = await response.json();
        console.log(`Farm stands are:${farmstands}`);
        return setSectorList(farmstands);
      } catch (ex) {
        console.log(ex);
      }
    };
    getSectorList();
  }, []);

  return (
    <div>
      <Typography variant="h4">
        Farm Stands in {citySector.toUpperCase()} Calgary:
      </Typography>
      {sectorList ? (
        sectorList.map((farmStand) => {
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

export default SectorList;
