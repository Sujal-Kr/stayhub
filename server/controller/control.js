const PropertyModel=require('../models/propertySchema');

const getProperty=async(req,res)=>{
    const property=await PropertyModel.find()

    res.json({
        message:"Recived property details",
        property
    })
}

const postProperty=async(req,res)=>{
    const data=req.body
    console.log(data);
    const prop=await PropertyModel.create({...data})
    console.log("prop from backend",prop)
    res.json({
        message:"sent successfully",
        data:req.body
    })

}

const createUser =async (req,res)=>{
    try{
        const data = req.body;

        const user = await userModel.create({...data});
        console.log(user);
    }
    catch(err){
        console.log("Error while creating user");
        return res.status(500).json({
            message:"Error while creating user"
        })
    }


}
module.exports = {getProperty,postProperty,createUser}
