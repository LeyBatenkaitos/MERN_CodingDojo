require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;

require("./config/connectToDB")();

const app = express();

app.use(express.json());

app.use("/api", require("./routes/api"));
