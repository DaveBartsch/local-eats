import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailComponent = () => {
  const params=useParams();
  const id=params.id;
  console.log(`id is:`, id);
  const navigate=useNavigate();
  const [farmStand, setFarmStand] = useState();

  useEffect(() => {
    const getFarmStand = async () => {
      const response = await fetch(`/farm_stands/${id}`);
      const data = await response.json();
     setTimeout(()=> setFarmStand(data),1000);
    };
    getFarmStand();
  }, [id]);

  if (!farmStand) {
    return <p>Loading................</p>;
  }

  return (
    <div
      style={{
       display:'grid',
        gridTemplate:'2fr 1fr',
        borderColor: "green",
        borderWidth: 2,
        borderStyle: "solid",
      }}
    >
     <button onClick={()=>navigate("/")}>Back to List</button> <br/>
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
      <br/>
      <button onClick={()=>navigate('/edit/' + farmStand._id)}>Edit Farm Stand</button>
      <br />
      
    </div>
  );
};

export default DetailComponent;
