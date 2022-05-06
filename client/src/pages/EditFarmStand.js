import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NewFarmStandForm from "../components/NewFarmStandForm";

const EditFarmStand = () => {
  //const params = useParams();
  const { id } = useParams();
  //console.log(`params: ${params}`);
  //const id = params.id;
  const navigate=useNavigate();
  console.log(`id: ${id}`);
  console.log(`Editing Farm Stand ${id}`);
  const [farmStand, setFarmStand] = useState();

  useEffect(() => {
    const getFarmStand = async () => {
      let response = await fetch(`/farm_stands/${id}`);
      let data = await response.json();
      setTimeout(() => setFarmStand(data), 1000);
      console.log(data);
    };
    getFarmStand();
  }, [id]);

  const onFormSubmit = async (farmStand) => {
    const data = JSON.stringify(farmStand);
    console.log(data);
    let response = await fetch(`/farm_stands/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      console.log("Edited successfully");
    setTimeout(()=>{  navigate(`/details/${id}`)}, 1000);
    } else {
      alert("Error editing farm stand");
    }
  };

  const onFormCancel = async (farmStand)=>{
    console.log(`Cancelling edit of ${id}`);
    setTimeout(()=>{  navigate(`/details/${id}`)}, 1000);
  }

const onFormDelete = async (farmStand)=>{
  window.confirm("Are you sure you want to delete  this farm stand?");
  if(window.confirm){
  console.log(`Deleting Farm Stand ${id}`);
  let response = await fetch(`/farm_stands/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    console.log("Deleted successfully");
    setTimeout(()=>{  navigate(`/`)}, 1000);
  } else {
    alert("Error deleting farm stand");
  }
} else {
  console.log("Delete cancelled");
}
}

  return (
    <Box mt={3} >
      <h2>Edit Farm Stand</h2>
      <NewFarmStandForm
        initialValues={farmStand}
        onFormSubmit={onFormSubmit}
        buttonText="Update a Farm Stand"
        onFormCancel={onFormCancel}
        onFormDelete={onFormDelete}
      />
      
    </Box>
    
  );
  
};

export default EditFarmStand;
