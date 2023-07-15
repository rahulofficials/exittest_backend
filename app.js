const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { dataModel } = require("./dataModel");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const url = "mongodb+srv://rahul1234:rahul1234@cluster0.oyxsjqp.mongodb.net/finaldb?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true});

app.post("/adddata", async(req,res)=>{
    try {
        var data = req.body
        console.log(data)
        const tosave = await dataModel(data)
        tosave.save()
        res.json({status:"Success",message:"TODO LIST ADDED"})
    } catch (error) {
        res.json({status:"Error",message:"ERROR IN ADDING TODO LIST "})
    }
})

app.get("/getdata", async(req,res)=>{
    try {
        const data = await dataModel.find()
        res.json({status:"Success",message:"SUCCESFULY FETCHED TODO LIST","DATA":data})
    } catch (error) {
        res.json({status:"Error",message:"ERROR IN FETCHING TODO LIST", "error":error})       
    }
})

app.post("/deletedata",async (req,res)=>{
    try {
        var data = req.body
        await dataModel.remove()
        res.json({status:"Success",message:"DELETED SUCCESSFULLY",})       
    } catch (error) {
        res.json({status:"Error",message:"ERROR in DELETION", "error":error})       
    }
})

app.listen(3000,()=>{
    console.log("Server Running")
})