// import mongoose
const mongoose = require("mongoose");

// new variable: connection string
const connectionString = "mongodb://localhost:27017/yycLocalEats";

// connect mongoose to connectionString
mongoose.connect(connectionString, () => {
  console.log(`Connected to Mongoose on: ${connectionString}`);
});

// export mongoose
module.exports = mongoose;
