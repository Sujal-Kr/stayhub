const express = require('express');
const cors=require('cors');
require('./db/connection.js')

const propertyRouter,userRouter=require('./routes/route.js')
const app = express();

app.use(express.json());
app.use(cors())
app.use('/property',propertyRouter);
app.use("/user",userRouter);

app.listen(5000, () => {
    console.log("Server is running on port 5000...");
});

