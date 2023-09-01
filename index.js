const express = require('express');
const app = express();
const mongoose = require("mongoose");
const indexRouter = require('./routes')


mongoose.connect("mongodb://127.0.0.1/todoapp").then(()=>{
    console.log("Database connected")
})

app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next)=>{
    err = err ? err.toString() : "Something went wrong";
    res.status(500).json({data: "", msg:err})
})

app.listen(5555)
console.log('App runing on port 5555')