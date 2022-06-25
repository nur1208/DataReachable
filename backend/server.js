import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import taskRouter from "./routes/taskRoute.js";

dotenv.config();

const main = async () => {
  // MongoDB
  try {
    await mongoose
      // eslint-disable-next-line no-undef
      .connect(process.env.MONGODB_URL);

    console.log("Connected to DB");

    const app = express();
    const port = 3354;

    // TODO connect to that database then start the server.
    app.use(morgan("dev"));
    app.use(express.json()); // support json encoded bodies
    // app.use(express.urlencoded({ extended: true })); // support encoded bodies

    // Setting up middleware
    app.use(cors("http://localhost:3000"));
    // app.use(express.static("public"));
    // app.use(initialize());

    app.get("/", (req, res) => {
      console.log(req.query.number);
      // something
      res.send(`Hello World! ${req.query.number}`);
    });

    // Routing
    app.use("/api/v1/tasks", taskRouter);

    app.listen(port, () => {
      console.log(
        `express app listening at http://localhost:${port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

main();
