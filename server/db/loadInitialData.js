// import models
const FarmStand = require("./models/standSchema");

// import data
const initialData = require("./farm-stand.json");

// import mongoose
const mongoose = require("./mongoose");

// import functions
const { createFarmStand, getAllFarmStands } = require("./models/standSchema");

//new function: create an object for every farm stand
const loadInitialData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const farmStand = initialData[i];
    try {
      console.log(`Creating farmStand: ${farmStand.vendor_name}`);
      const newFarmStand = await createFarmStand(farmStand);
      console.log(
        `created farmStand ${newFarmStand.vendor_name} with id ${newFarmStand._id}`
      );
    } catch (err) {
      console.log(`error creating farmStand: ${farmStand.vendor_name}`);
      console.log(err.message);
    }
  }
  console.log("Finished loading initial data.");
};

//call the function
loadInitialData();

// // load data
// const loadInitialData = async () => {
//   const farmStands
//   // load farm stands
//   for (let farmStand of farmStands) {
//     await farmStand.create(farmStand);
//     console.log(farmStand);
//   }
//   console.log("Farm stands loaded");
// };

//How to Stop this function
