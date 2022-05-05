import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";

// Component for displaying simlified data
const FarmStandDisplay = (props) => {
  const farmStand = props.farmStand;

  return (
    <div>
      <Card sx={{ m: 2, p: 2, maxWidth: 500, height: "90%" }}>
        <Typography variant="h4">
          <Link to={`/details/${farmStand._id}`} color="green">
            {farmStand.vendor_name}
          </Link>
        </Typography>
        <Typography>{farmStand.vendor_description}</Typography>
        <br />
        <Typography>{farmStand.product_description}</Typography>
        <br />

        <Typography>
          <b>Location Name:</b> {farmStand.location_name}
        </Typography>
        <Typography>
          <b>Address:</b> {farmStand.address}
        </Typography>
        <Typography>
          <b>Duration:</b> {farmStand.duration}
        </Typography>
        <Typography>
          <b>Hours:</b> {farmStand.hours}
        </Typography>
        <Typography>
          <b>Community:</b> {farmStand.community}
        </Typography>
        <br />
        <br />
      </Card>
    </div>
  );
};

export default FarmStandDisplay;
