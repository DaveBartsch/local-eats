import { Card, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const FarmStandData = (props) => {
  const farmStand = props.farmStand;

  return (
    <Link
      underline="none"
      color="green"
      component={RouterLink}
      to={`/details/${farmStand._id}`}
    >
      {/*<h2>location_name:</h2>{/*comment here*/}
      <Card sx={{ m: 2, p: 2, maxWidth: 500, height: "90%" }}>
      <Typography variant="h5" color={"green"} underline={true}>
        {farmStand.location_name}
      </Typography>

      <Typography>{farmStand.type}</Typography>

      <Typography>address:</Typography>
      <Typography>{farmStand.address}</Typography>
      <Typography>hours:</Typography>
      <Typography>{farmStand.hours}</Typography>
      <Typography>duration:</Typography>
      <Typography>{farmStand.duration}</Typography>
      <Typography>community:</Typography>
      <Typography>{farmStand.community}</Typography>
      <Typography>sector:</Typography>
      <Typography>{farmStand.sector}</Typography>
      <Typography>vendor_name:</Typography>
      <Typography>{farmStand.vendor_name}</Typography>
      <Typography>vendor_description:</Typography>
      <Typography>{farmStand.vendor_description}</Typography>
      <Typography>product_description:</Typography>
      <Typography>{farmStand.product_description}</Typography>
      </Card>
    </Link>
    
  );
};

export default FarmStandData;
