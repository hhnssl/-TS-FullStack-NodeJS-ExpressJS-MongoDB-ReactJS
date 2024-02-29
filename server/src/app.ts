import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();
const bodyParser = require("body-parser");

const PORT: number = 4444; //

app.use(cors());
app.use(bodyParser.json());
app.use(todoRoutes);

const uri: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}/${process.env.MONGO_DB}`;

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => {
    throw err;
  });
