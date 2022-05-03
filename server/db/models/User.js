const mongoose=require ('mongoose');


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
