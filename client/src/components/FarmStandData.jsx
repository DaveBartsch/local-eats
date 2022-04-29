import { Link } from "react-router-dom";

const FarmStandData = (props) => {
  const farmStand = props.farmStand;

  return (
    <div>
      <h2>location_name:</h2>
      <h2><Link to={`/details/${farmStand._id}`}>{farmStand.location_name}</Link></h2>

      <h1>{farmStand.type}</h1>

      <p>address:</p>
      <p>{farmStand.address}</p>
      <p>hours:</p>
      <p>{farmStand.hours}</p>
      <p>duration:</p>
      <p>{farmStand.duration}</p>
      <p>community:</p>
      <p>{farmStand.community}</p>
      <p>sector:</p>
      <p>{farmStand.sector}</p>
      <p>vendor_name:</p>
      <p>{farmStand.vendor_name}</p>
      <p>vendor_description:</p>
      <p>{farmStand.vendor_description}</p>
      <p>product_description:</p>
      <p>{farmStand.product_description}</p>
    </div>
  );
};

export default FarmStandData;
