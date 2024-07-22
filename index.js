const express =require("express");

const app= express();

require("dotenv").config();
const PORT= process.env.PORT||8000;

// middleware
app.use(express.json());

const blog =require("./routes/blog")

// mount
app.use("/api/v1",blog); 

const connectWithDb =require("./config/database");
connectWithDb();

app.listen(PORT,()=>{
    console.log(`App is started at PORT no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>This is Homepage baby</h1>");
})