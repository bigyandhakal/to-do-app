const {Schema, model} = require("mongoose")
const commonSchema = require('../commons/commonSchema')

const todoSchema = new Schema({
    title:{type: String, required: true},
    status:{
        type: String,
        enum: ["pending", "completed"],
        required: true,
        default: "pending",
    },
    ...commonSchema,
});


module.exports = model("Todo", todoSchema)
