import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewFarmStandForm from "../components/NewFarmStandForm";



const EditFarmStand = () => {
  //const params = useParams();
  const 
  { id } = useParams();
  //console.log(`params: ${params}`);
  //const id = params.id;
  console.log(`id: ${id}`);
  console.log(`Editing Farm Stand ${id}`);
  const [farmStand, setFarmStand] = useState();
  
  useEffect(() => {
    const getFarmStand = async () => {
      let response = await fetch(`/farm_stands/${id}`);
      let data = await response.json();
      setTimeout(()=> setFarmStand(data),1000);
      console.log(data);
    };
    getFarmStand();
  }, [id]);

   const onFormSubmit = async (farmStand) => { 
       const data=JSON.stringify(farmStand);
       console.log(data);
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
      <NewFarmStandForm  initialValues={farmStand} onFormSubmit={onFormSubmit}/>
    </div>
  );
};

export default EditFarmStand;
