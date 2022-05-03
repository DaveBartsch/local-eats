import { Typography } from "@mui/material";
import React from "react";
import FarmStandsList from "../components/FarmStandsList";
const HomePage = () => {
  return (
    <div>
        <Typography variant="h3">Calgary FarmStands List</Typography>
      <FarmStandsList />
    </div>
  );
};

export default HomePage;
