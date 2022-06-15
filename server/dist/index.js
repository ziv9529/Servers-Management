"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./db");
const servers_1 = __importDefault(require("./servers"));
(0, db_1.initDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/servers", servers_1.default);
app.get("/", (req, res, next) => {
    res.send("hello world");
});
app.use((error, req, res, next) => {
    console.log(error);
    return res.status(500).json({ message: "something went wrong" });
});
app.listen(3001, () => {
    console.log("server running on port 3001");
});
