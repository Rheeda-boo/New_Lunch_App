const express = require("express");
const database = require("./config/db")
const app = express();

const port = 3033;

app.listen(port, () => {
    `Listening to port ${port}`
});