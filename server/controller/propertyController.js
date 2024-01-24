const PropertyModel = require('../models/propertyModel')

const getProperty = async(req,res) =>{
    try {

        const allProperties = await PropertyModel.find({});
        console.log(allProperties);

        return res.status(200).json({
            message:"List of Propeties",
            PropertyData : allProperties
        })
        
    } catch (error) {
        console.log("Error while getting property")
        return res.status(500).json({
            message:error.message
        })
    }
}


const postProperty = async(req,res) =>{
    try {
        const data = req.body;

        console.log(req.body);

        const property = await PropertyModel.create({...data});
        console.log(property);

        return res.status(200).json({
            message:"Property Listing completes",
            property
        })
    } catch (error) {
        console.log("Error while Posting/creating property")
        return res.status(500).json({
            message:error.message
        })
    }
}

module.exports = { getProperty , postProperty };