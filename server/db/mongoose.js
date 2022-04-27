// import mongoose
const mongoose = require("mongoose");

// new variable: connection string
const connectionString = "mongodb://localhost:27017/yycLocalEats";

// connect mongoose to connectionString
try {
  mongoose.connect(connectionString, () => {
    console.log(`Connected to Mongoose on: ${connectionString}`);
  });
} catch (err) {
  console.log(`MongoDB Connection Failed!  err is ${err}`);
}

// export mongoose
module.exports = mongoose;
