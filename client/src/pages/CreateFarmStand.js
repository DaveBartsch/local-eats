import React from "react";
import NewFarmStandForm from "../components/NewFarmStandForm";

const CreateFarmStand = () => {
  const onFormSubmit = async (farmStand) => {
    const newFarmStand = {
      type: farmStand.type,
      location_name: farmStand.location_name,
      address: farmStand.address,
      hours: farmStand.hours,
      duration: farmStand.duration,
      community: farmStand.community,
      sector: farmStand.sector,
      vendor_name: farmStand.vendor_name,
      vendor_description: farmStand.vendor_description,
      product_description: farmStand.product_description,
    };
    const data = JSON.stringify(newFarmStand);
    console.log(`Creating a new Farm Stand: ${data}`);
    let response = await fetch("/farm_stands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      console.log("Created successfully");
    } else {
      alert("Error creating farm stand");
    }
  }

    return (
      <div>
        <h2>Create Farm Stand</h2>
        <NewFarmStandForm onFormSubmit={onFormSubmit} buttonText="Create FarmStand"/>
      </div>
    );
  };


export default CreateFarmStand;
