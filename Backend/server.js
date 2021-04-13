const express = require("express");
const database = require("./config/db")
const app = express();

const port = 3030;

app.listen(port, () => {
    `Listening to port ${port}`
});