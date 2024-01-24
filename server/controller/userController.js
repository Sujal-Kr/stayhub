const UserModel = require('../models/userModel');
const Cookies = require("cookies");


const createUser = async (req,res) =>{
    try {
        const data = req.body;
        console.log(data);
        var cookies = new Cookies(req, res, { keys: keys })
        const user = await UserModel.create({...data});
        console.log(user);
        cookies.set('loggedIn', true);
        return res.status(200).json({
            message:"user Created successfully",
            user
        })
        
    } catch (error) {
        console.log("Error creating user",error.message);
        
    }
}

module.exports = { createUser };