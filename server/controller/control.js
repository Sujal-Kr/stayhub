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
module.exports = {getProperty,postProperty}
