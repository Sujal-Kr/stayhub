const UserModel = require('../models/userModel');
const Cookies = require("cookies");


const createUser = async (req,res) =>{
    try {
        const data = req.body;
        console.log(data);
        const user = await UserModel.create({...data});
        console.log(user)
        return res.status(200).json({
            message:"user Created successfully",
            user
        })
        
    } catch (error) {
        console.log("Error creating user",error.message);
        
    }
}

const logIn = async(req,res)=>{
    try {  
        const {email,password} = req.body
       
        const user = await UserModel.findOne({email})
    
        if(user === null ){
            return res.status(400).json({
                message:"User Account Not Found"
            })
        }

        if(user.password !== password ){
            return res.status(400).json({
                message:"Invaild User email or user password"
            })
        }
        
        return res.status(201).json({
            message:"User Authenticated",
            userId:user._id
        })

    } catch (error) {
        console.log("Error logging user");
        return res.status(500).json({
            message:error.message
        })
    }
}

module.exports = { createUser , logIn };