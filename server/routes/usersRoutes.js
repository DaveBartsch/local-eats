const router = require("express").Router();
const User=require("../db/models/User");
const bcrypt = require('bcrypt');




    router.post('/register',async (req,res)=>{
       try{
            const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        const newUser=new User({
            userName:req.body.userName,
            email:req.body.email,
            password:hashedPassword,
        });
        const user=await newUser.save();
        console.log(user);
        res.status(200).json(user._id);
    } catch(err) {
        res.status(500).json(err)
    }
})
      

router.post("/login",async (req,res)=>{
    try{
        const user=await User.findOne({userName:req.body.userName});
        if(!user){
            res.status(404).json("Wrong username or password");
        }
        const isMatch=await bcrypt.compare(req.body.password,user.password);
        if(!isMatch){
            res.status(401).json("Wrong username or password")
        }
        res.status(200).json({_id:user._id,userName:user.userName,email});

    }catch(err){
        res.status(500).json(err)
    }
})





module.exports= router;
