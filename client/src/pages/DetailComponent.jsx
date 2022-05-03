import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const DataItem = (props) => {
  return (
  <Box
  display="flex"
  flexDirection="row"
  gap={3}
  justifyContent="space-between"
  >
  {props.children}
  </Box>
  );
 };



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
    <Box
    display="flex" flexDirection="column" maxWidth="600px" my ={5} mx="auto"
      
    >
     
      <DataItem>
      <Typography variant="label">ID</Typography>
      <Typography variant="span">{farmStand._id}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Type:</Typography>
      <Typography variant="span">{farmStand.type}</Typography >
      
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Location:</Typography>
      <Typography variant="span">{farmStand.location_name}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Address:</Typography>
      <Typography variant="span">{farmStand.address}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Hours:</Typography>
      <Typography variant="span">{farmStand.hours}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Duration:</Typography>
      <Typography variant="span">{farmStand.duration}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Community:</Typography>
      <Typography variant="span">{farmStand.community}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Sector:</Typography>
      <Typography variant="span">{farmStand.sector}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Vendor Name:</Typography>
      <Typography variant="span">{farmStand.vendor_name}</Typography >
      </DataItem>
      <br />
      <DataItem>
      <Typography variant="label">Vendor Description:</Typography>
      <Typography variant="span">{farmStand.vendor_description}</Typography >
      </DataItem>
      <br/>
      <Button variant="contained" onClick={()=>navigate('/edit/' + farmStand._id)}>Edit Farm Stand</Button>
      <Button variant="contained" onClick={()=>navigate('/')}>Back</Button>
      
      <br />
      
    </Box>
  );
};

export default DetailComponent;
