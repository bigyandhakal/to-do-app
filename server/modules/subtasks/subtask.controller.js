// crud operation
const Model = require("./subtask.model");
const TodoModel = require("../todos/todo.model");

// create
const create = async (payload) => {
  return await Model.create(payload);
};

// read get all
const list = async () => {
  return await Model.find();
};

// get by id
const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

// update by id
const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const updateStatus = async (id, status) => {
  const subtask = await Model.findOne({ _id: id });
  if (status.status === "pending") {
    await TodoModel.findOneAndUpdate(
      { _id: subtask.todo_id },
      { status: "pending" },
      { new: true }
    );
  }
  return await Model.findOneAndUpdate({ _id: id }, status, { new: true });
};

// delete by id
const removebyId = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = {
  create,
  list,
  getById,
  updateById,
  updateStatus,
  removebyId,
};
