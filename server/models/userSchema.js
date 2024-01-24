const {model, Schema} = require("mongoose");

const userSchema = new Schema({
	username: {
		type: String,
		 required: true
	},
	email: {
		type: String,
		required: true
	},
	passWord: {
		type: String,
		required: true
	},
});

const userModel = model("users",userSchema);
module.exports = userModel;