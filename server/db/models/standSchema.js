const mongoose = require("../mongoose");

// schema for farm stand
const farmStandSchema = new mongoose.Schema({
  type: String,
  location_name: String,
  address: String,
  hours: String,
  duration: String,
  community: String,
  sector: String,
  vendor_name: String,
  vendor_description: String,
  product_description: String,
  // create_dt_utc: fixed_timestamp,
  // mod_dt_utc :fixed_timestamp,
  // point :Point
});

// create model from schema
const FarmStand = mongoose.model("farm_stand", farmStandSchema);

const createFarmStand = async (farmStand) => {
  const newFarmStand = await FarmStand.create(farmStand);
  // console.log(`farmStand is: ${JSON.stringify(farmStand)}`);
  return newFarmStand;
};

const getAllFarmStands = async () => {
  const farmStands = await FarmStand.find({});
  return farmStands;
};

// export model
module.exports = FarmStand;

module.exports = { createFarmStand, getAllFarmStands };
