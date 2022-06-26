import TaskModel from "../model/Task.js";

export const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const task = new TaskModel(req.body);

    const newTask = await task.save();
    res.send({
      message: "article has been saved.",
      article: { ...newTask._doc, id: newTask._id },
    });
  } catch (error) {
    console.error(error);

    res.status(500).send("article failed to save.");
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    if (tasks.length === 0) {
      res.status(404).json({ status: "fail" });
      return;
    }

    res.json({
      status: "success",
      resultLength: tasks.length,
      articles: tasks.map((task) => ({
        ...task._doc,
        id: task._id,
      })),
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "server error" });
  }
};

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

export const updateTasks = async (req, res) => {
  const filteredBody = filterObj(req.body, "task", "status");
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      req.body.id,
      filteredBody,
      { new: true }
    );

    res.json({
      status: "success",
      article: { ...updatedTask._doc, id: updatedTask._id },
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "server error" });
  }
};

export const deleteTasks = async (req, res) => {
  console.log(req.query);
  console.log(req);

  const doc = await TaskModel.findByIdAndDelete(req.query.id);

  if (!doc) {
    return res.status(404).json({
      status: "fail",
      data: null,
      message: `No document found with '${req.query.id}' ID`,
    });
  }

  // 204 means deleted
  res.status(204).json({
    status: "success",
    data: null,
  });
};
