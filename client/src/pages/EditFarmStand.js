import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewFarmStandForm from "../components/NewFarmStandForm";

const EditFarmStand = () => {
  const params = useParams();

  const id = params.id;
  const [farmStand, setFarmStand] = useState();
  
  useEffect(() => {
    const getFarmStand = async () => {
      let response = await fetch(`/farm_stands/${id}`);
      let data = await response.json();
      setFarmStand(data);
    };
    getFarmStand();
  }, [id]);

   const onFormSubmit = async (farmStand) => { 
       const data=JSON.stringify(farmStand);
    let response = await fetch(`/farm_stands/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    });
    if(response.status===200){
        console.log("Edited successfully");
    } else {
        alert("Error editing farm stand");
    }
    };

  return (
    <div>
      <h2>Edit Farm Stand</h2>
      <NewFarmStandForm  farmStand={farmStand} initialValues={onFormSubmit}/>
    </div>
  );
};

export default EditFarmStand;
