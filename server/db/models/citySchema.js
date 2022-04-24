const mongoose = require("mongoose");

// schema for location
const citySchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

// create model from schema
const City = mongoose.model("City", citySchema);

// export model
module.exports = City;
