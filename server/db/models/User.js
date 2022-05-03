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

const User=mongoose.model('User',UserSchema);


    //hash password
    const createUser=async (user)=>{
    const hashedPassword=await bcrypt.hash(user.password,10);
    const newUser=await User.create({
        userName:user.userName,
        email:user.email,
        password:hashedPassword
    });
    return newUser;
}

const getUserById=async (id)=>{
    const   user=await User.findById(id);
    return user;
}

const getUserByName=async (userName)=>{
    const user=await User.findOne({userName:userName});
    return user;
}



const updateUser=async (id,updateduser)=>{
    const user=User.findByIdAndUpdate(id,updateduser);
    return true;
}

const deleteUser=async (id)=>{
    const user=await User.findByIdAndDelete(id);
    return true;
}

const verifyPassword=async (password)=>{
   const isMatch=await bcrypt.compare(password,this.password);
    return isMatch;
}

module.exports={
    createUser,
    getUserById,
    getUserByName,
    updateUser,
    verifyPassword,
    deleteUser
}