import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import { initDB, getConnection } from "./db";
import serversRoute from "./servers";

initDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/servers", serversRoute);

app.get("/", (req, res, next) => {
    res.send("hello world")
})

app.use((error, req, res, next) => {
    console.log(error);
    return res.status(500).json({ message: "something went wrong" });
  });

app.listen(3001, () => {
    console.log("server running on port 3001");
})