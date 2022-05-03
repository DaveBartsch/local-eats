const mongoose=require ('mongoose');
const bcrypt=require('bcrypt');

const UserSchema=new mongoose.Schema({
    userName:{  
        type:String,
        required:true,
        unique:true,
        trim:true,
        min:3,
        max:20,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:
    {
        type:String,
        required:true,
        trim:true,
        min:6

    },
}, {timestamps:true}
);  

module.export=mongoose.model('User',UserSchema);


    //hash password
    const createUser=(user)=>{
    const hashedPassword=await bcrypt.hash(user.password,10);
    const newUser=await user.create({
        userName:user.userName,
        email:user.email,
        password:hashedPassword
    });
    return newUser;
}

const getUserById=async (id)=>{
    const   user=await user.findById(id);
    return user;
}

const getUserByName=async (userName)=>{
    const user=await user.findOne({userName:userName});
    return user;
}



const updateUser=(id,updateduser)=>{
    const user=user.findByIdAndUpdate(id,updateduser);
    return true;
}

const deleteUser=(id)=>{
    const user=user.findByIdAndDelete(id);
    return true;
}

module.exports={
    createUser,
    getUserById,
    getUserByName,
    updateUser,
    deleteUser
}