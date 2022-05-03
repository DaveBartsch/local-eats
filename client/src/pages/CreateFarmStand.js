import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import NewFarmStandForm from "../components/NewFarmStandForm";




const CreateFarmStand = () => {
  const navigate=useNavigate()
const  onFormCancel = async (farmStand)=>{
    console.log(`Cancelling create of ${farmStand}`);
    navigate("/");
  }
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
    if (response.status === 200 || response.status === 201 || response.status===400) {
      console.log("Created successfully");
      navigate("/");
    } else {
      alert("Error creating farm stand");
    }
  }

  

    return (
      <Box mt={3}>
      
        <h2>Create Farm Stand</h2>
        <NewFarmStandForm onFormSubmit={onFormSubmit} buttonText="Create FarmStand" onFormCancel={onFormCancel}/>
      
      </Box>
    );
  };


export default CreateFarmStand;
