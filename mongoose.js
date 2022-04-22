// import and connect mongoose

const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/yycLocalEats");

// export mongoose
module.exports = mongoose;
