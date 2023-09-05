const {Schema, model} = require("mongoose")
const {ObjectId} = Schema.Types;
const commonSchema = require('../commons/commonSchema')

const subtaskSchema = new Schema({
    title:{type: String, required: true},
    status:{
        type: String,
        enum: ["pending", "completed"],
        required: true,
        default: "pending",
    },
    todo_id: {type: ObjectId, ref:"Todo"},
    ...commonSchema,
});

module.exports = model("Subtask", subtaskSchema)
