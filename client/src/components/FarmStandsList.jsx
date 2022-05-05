import React, { useEffect, useState } from "react";
import FarmStandData from "./FarmStandData";
import FarmStandDisplay from "./FarmStandDisplay";
import { Grid, Typography } from "@mui/material";

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
    <Grid container>
      {farmStandList ? (
        farmStandList.map((farmStand) => {
          return (
            <Grid xs={12} sm={6} md={3} item>
              <FarmStandDisplay farmStand={farmStand} />
            </Grid>
          );
        })
      ) : (
        <Typography Component="div" variant="h3">
          Loading...
        </Typography>
      )}
    </Grid>
  );
};

export default FarmStandsList;
