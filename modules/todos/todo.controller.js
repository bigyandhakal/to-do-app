const Model = require('./todo.model')

// post data

const create = async(payload)=>{
    return await Model.create(payload);
}

// get all data

const list = async()=>{
    return await Model.find();
}

// get data by id
const getById = async(id)=>{
    return await Model.findById({_id:id})
}

// update data
const updateById = async(id, payload)=>{
    return await Model.findOneAndUpdate({_id:id}, payload, {new:true})
}

const updateStatus = async(id, payload)=>{
    const {status} = payload;
    if(!status) throw new Error("Status is required")
    return await Model.findOneAndUpdate({_id:id}, {status}, {new:true})
}

// delete data
const removeById = async(id)=>{
    return await Model.deleteOne({_id:id})
}


module.exports = {create, list, getById, updateById, updateStatus,removeById}