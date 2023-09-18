const Model = require("./todo.model");
const subtasksModel = require("../subtasks/subtask.model");
// post data

const create = async (payload) => {
  return await Model.create(payload);
};

// get all data

const list = async () => {
  return await Model.aggregate([
    {
      $lookup: {
        from: "subtasks",
        localField: "_id",
        foreignField: "todo_id",
        as: "subtasks",
      },
    },
  ]);
};

// get data by id
const getById = async (id) => {
  return await Model.findById({ _id: id });
};

// update data
const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const updateStatus = async (id, status) => {
  const allSubtasks = await subtasksModel.find({ todo_id: id });
  if (status.status === "completed") {
    allSubtasks.map(async (subtask) => {
      await subtasksModel.findOneAndUpdate(
        { _id: subtask._id },
        { status: "completed" },
        { new: true }
      );
    });
  }
  return await Model.findOneAndUpdate({ _id: id }, status, { new: true });
};

// delete data
const removeById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = {
  create,
  list,
  getById,
  updateById,
  updateStatus,
  removeById,
};
