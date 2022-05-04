// // import mongoose
// const mongoose = require("mongoose");

// // new variable: connection string
// const connectionString = "mongodb://127.0.0.1:27017/yycLocalEats";

// // connect mongoose to connectionString
// mongoose.connect(connectionString, () => {
//   console.log(`Connected to Mongoose on: ${connectionString}`);
// });

// export mongoose


const mongoose = require("mongoose");

const uri = "mongodb://localhost/yycLocalEats";

mongoose.connect(uri).catch(err => {
  console.log(`Error connecting to Mongoose: ${err.message}`)});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;