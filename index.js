require("dotenv").config(); // import dotenv
const express = require("express"); //import express
const mongoose = require("mongoose"); //import mongoose(mongodb)

const Product = require("./models/product.model.js")//import product model
const productRoute = require("./routes/product.route.js") // import product routes

const app = express();
const port = process.env.PORT;
const connectionString = process.env.DB_URI;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//routes
app.use("/api/products", productRoute);


app.get("/", (req, res)=>{
    res.send("Hello gyud"); 
});


//connect to mongodb
mongoose.connect(connectionString).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(port, () =>{
        console.log("Server is running on port 3000");
    })
}).catch((err)=>{
    console.log("Connection failed");
    console.log(err.message);
})