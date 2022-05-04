// const mongoose=require ('mongoose');
// const bcrypt=require('bcryptjs');

// const UserSchema=new mongoose.Schema({
//     userName:{  
//         type:String,
//         required:true,
//         unique:true,
//         trim:true,
//         min:3,
//         max:20,
        
//     },
   
//     password:
//     {
//         type:String,
//         required:true,
//         trim:true,
//         min:6

//     },
// }, {timestamps:true}
// );  

// const User=mongoose.model('User',UserSchema);


//     //hash password
//     const createUser=async (user)=>{
//     const hashedPassword=await bcrypt.hash(user.password,10);
//     console.log(hashedPassword);
//     const newUser=await User.create({
//         userName:user.userName,
//         password:hashedPassword
//     });
//     console.log(newUser);
//     return newUser;
// }

// const getUserById=async (id)=>{
//     const   user=await User.findById(id);
//     return user;
// }

// const getUserByName=async (userName)=>{
//     const user=await User.findOne({userName:userName});
//     return user;
// }



// const updateUser=async (id,updateduser)=>{
//     const user=User.findByIdAndUpdate(id,updateduser);
//     return true;
// }

// const deleteUser=async (id)=>{
//     const user=await User.findByIdAndDelete(id);
//     return true;
// }

// const verifyPassword = async (password, hashedPassword) => {
//     const passwordsMatch = await bcrypt.compare(password, hashedPassword);
//     return passwordsMatch;
//   };

// module.exports={
//     createUser,
//     getUserById,
//     getUserByName,
//     updateUser,
//     verifyPassword,
//     deleteUser
// }

const mongoose = require("../mongoose");
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAgent: { type: Boolean, default: false },
  farmStandId: { type: String, default: "" },
});

const User = model("User", userSchema);

const createUser = async (user) => {
  // hash password with bcrypt

  const hashedPassword = bcrypt.hashSync(user.password);

  const newUser = await User.create({
    ...user,
    password: hashedPassword,
  });

  return newUser;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  console.log(`User is ${user}`);
  return user;
};

const getUserByUsername = async (username) => {
  const user = await User.findOne({ username: username });
  return user;
};

const updateUser = async (id, updateData) => {
  const updatedUser = await User.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  return updatedUser;
};

const verifyPassword = async (password, hashedPassword) => {
  const passwordsMatch = await bcrypt.compare(password, hashedPassword);
  return passwordsMatch;
};

module.exports = {
  createUser,
  getUserByUsername,
  getUserById,
  updateUser,
  verifyPassword,
};