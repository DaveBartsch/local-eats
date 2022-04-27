// import models
const FarmStand = require("./models/standSchema");

// import farm stand data
const initialData = require("./farm-stand.json");

// import mongoose
const mongoose = require("./mongoose");

// import functions
const { createFarmStand } = require("./models/standSchema");

//new function: create an object for every farm stand
const loadInitialData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const farmStand = initialData[i];
    try {
      const newFarmStand = await createFarmStand(farmStand);
    } catch (err) {
      console.log(`Error creating farmStand: ${farmStand.vendor_name}`);
      console.log(err.message);
    }
  }
  console.log("Finished loading initial data.");
};

//call the function: create an object for every farm stand
loadInitialData();

//How to Stop this function
