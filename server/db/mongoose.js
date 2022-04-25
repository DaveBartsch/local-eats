// import and connect mongoose
const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/yycLocalEats";
try {
  mongoose.connect(connectionString, () => {
    console.log(`Connected to Mongoose on: ${connectionString}`);
  });
} catch {
  console.log("ERROR: Connection Failed!");
}

// export mongoose
module.exports = mongoose;
