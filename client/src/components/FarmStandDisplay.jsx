import { Link } from "react-router-dom";

// Component for displaying simlified data
const FarmStandDisplay = (props) => {
  const farmStand = props.farmStand;

  return (
    <div>
      <h2>
        <Link to={`/details/${farmStand._id}`}>{farmStand.vendor_name}</Link>
      </h2>
      {/* <p>vendor_description:</p> */}
      <p>{farmStand.vendor_description}</p>
      {/* <p>product_description:</p> */}
      <p>{farmStand.product_description}</p>

      <p>Location Name: {farmStand.location_name}</p>
      <p>Address: {farmStand.address}</p>
      <p>Duration: {farmStand.duration}</p>
      <p>Hours: {farmStand.hours}</p>
      <p>Community: {farmStand.community}</p>
      <br />
      <br />
    </div>
  );
};

export default FarmStandDisplay;
