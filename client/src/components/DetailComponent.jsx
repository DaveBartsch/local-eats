import React from "react";
import { useState, useEffect } from "react";
const DetailComponent = (props) => {
  const id = props.id;
  const [farmStand, setFarmStand] = useState();

  useEffect(() => {
    const getFarmStand = async () => {
      const response = await fetch(`/farm_stands/${id}`);
      const data = await response.json();
     setTimeout(()=> setFarmStand(data),5000);
    };
    getFarmStand();
  }, [id]);

  if (!farmStand) {
    return <p>Loading................</p>;
  }

  return (
    <div
      style={{
        flex: 2,
        justifyContent: "left",
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <label>ID</label>
      <span>{farmStand._id}</span>
      <br />
      <label>Type:</label>
      <span>{farmStand.type}</span>
      <br />
      <label>Location:</label>
      <span>{farmStand.location_name}</span>
      <br />
      <label>Address:</label>
      <span>{farmStand.address}</span>
      <br />
      <label>Hours:</label>
      <span>{farmStand.hours}</span>
      <br />
      <label>Duration:</label>
      <span>{farmStand.duration}</span>
      <br />
      <label>Community:</label>
      <span>{farmStand.community}</span>
      <br />
      <label>Sector:</label>
      <span>{farmStand.sector}</span>
      <br />
      <label>Vendor Name:</label>
      <span>{farmStand.vendor_name}</span>
      <br />
      <label>Vendor Description:</label>
      <span>{farmStand.vendor_description}</span>
      <br />
      {JSON.stringify(farmStand)}
    </div>
  );
};

export default DetailComponent;
