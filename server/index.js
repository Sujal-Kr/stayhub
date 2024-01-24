const express = require("express")
const cors = require("cors")
const  propertyRouter  = require("./routes/propertyRoute");
const  userRouter = require("./routes/userRoutes")

const app = express();
const PORT = 5000 || process.env.PORT

app.use(express.json());
app.use(cors());

app.use('/api',propertyRouter);
app.use('/auth',userRouter);



app.listen(PORT,()=>{
    require('./database/db');
    console.log(`listening on ${PORT}`);
})