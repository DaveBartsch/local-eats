import React from "react";
import { useState } from "react";

const NewFarmStandForm = (props) => {
  const [type, setType] = useState("");
  const [location_name, setLocation_name] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [duration, setDuration] = useState("");
  const [community, setCommunity] = useState("");
  const [sector, setSector] = useState("");
  const [vendor_name, setVendor_name] = useState("");
  const [vendor_description, setVendor_description] = useState("");
  const [product_description, setProduct_description] = useState("");
  const setShowModal=props.setShowModal;

  const onFormSubmit = async () => {
    const newFarmStand = {
      type: type,
      location_name: location_name,
      address: address,
      hours: hours,
      duration: duration,
      community: community,
      sector: sector,
      vendor_name: vendor_name,
      vendor_description: vendor_description,
      product_description: product_description,
    };
    
  const data=JSON.stringify(newFarmStand);
  console.log(`creating new farm stand: ${data}`);
  const response=await fetch("/farm_stands/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:data,
  });
if (response.status===200){
  console.log("success");
  setShowModal(false);
} else{
  alert('Error creating new farm stand');
}
  }


  return (
    <div>
      <h2>Add a new FarmStand</h2>
      <div>
        <label>FarmStand Type:</label>
        <input
          type="text"
          name="type"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <br />
        <label>Location Name:</label>
        <input
          type="text"
          name="location_name"
          value={location_name}
          onChange={(event) => {
            setLocation_name(event.target.value);
          }}
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <br />
        <label>Hours:</label>
        <input
          type="text"
          name="hours"
          value={hours}
          onChange={(event) => {
            setHours(event.target.value);
          }}
        />
        <br />
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />
        <br />
        <label>Community:</label>
        <input
          type="text"
          name="community"
          value={community}
          onChange={(event) => {
            setCommunity(event.target.value);
          }}
        />
        <br />
        <label>Sector:</label>
        <input
          type="text"
          name="sector"
          value={sector}
          onChange={(event) => {
            setSector(event.target.value);
          }}
        />
        <br />
        <label>Vendor Name:</label>
        <input
          type="text"
          name="vendor_name"
          value={vendor_name}
          onChange={(event) => {
            setVendor_name(event.target.value);
          }}
        />
        <br />
        <label>Vendor Description:</label>
        <input
          type="text"
          name="vendor_description"
          value={vendor_description}
          onChange={(event) => {
            setVendor_description(event.target.value);
          }}
        />
        <br />
        <label>Product Description:</label>
        <input
          type="text"
          name="product_description"
          value={product_description}
          onChange={(event) => {
            setProduct_description(event.target.value);
          }}
        />
        <br />
        <button onClick={onFormSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NewFarmStandForm;
