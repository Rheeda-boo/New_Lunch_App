const express = require("express");
const body = require("body-parser")
const database = require("./config/db");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const usersRouter = require("./routers/users");
app.use("/users", usersRouter);


const port = 3033;

app.listen(port, () => {
    `Listening to port ${port}`
});