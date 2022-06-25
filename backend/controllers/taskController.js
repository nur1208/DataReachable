import TaskModel from "../model/Task.js";

export const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const news = new TaskModel(req.body);

    await news.save();
    res.send("article has been saved.");
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
      articles: tasks,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: "server error" });
  }
};
