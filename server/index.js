const express = require('express');
const propertyRouter=require('./routes/route.js')
const app = express();
app.use(express.json());
app.use('/property',propertyRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000...");
});

