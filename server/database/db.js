const mongoose = require("mongoose");
const url =
	"mongodb+srv://sunnykumarcms45:n75rg2Sf3LN1V9qF@cluster0.rwh6pxn.mongodb.net/?retryWrites=true&w=majority";
const con = mongoose
	.connect(url)
	.then(() => {
		console.log("i am connected");
	})
	.catch((err) => console.log(err));
module.exports = con;
