const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/employees",async(req,res)=>{
    let employeesArr = await Employee.find().limit(20).skip(500);
    
    res.json(employeesArr);

});

app.listen(2222,()=>{
    console.log("Listening to Port 2222");
});

let employeeSchema = new mongoose.Schema({

id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
age:Number,
department:String,
profilePic:String,
salary:Number,
country:String,
});

let Employee = new mongoose.model("employee", employeeSchema,"employees")

let connectToMDB = async ()=>{
    try {
        mongoose.connect("mongodb+srv://chethankoduri:chethan@chethan.ifthz.mongodb.net/tata?retryWrites=true&w=majority&appName=chethan");
        console.log("sucessfully  connected to MDB");
        let employeesArr = await Employee.find();
        console.log(employeesArr);
    } catch (err) {
        console.log("unable to connect to MDB");
    }
};

connectToMDB();