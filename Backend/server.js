const express = require("express");
const body = require("body-parser")
const database = require("./config/db");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const usersRouter = require("./routers/users");
app.use("/users", usersRouter);

const adminRouter = require("./routers/admin");
app.use("/admin", adminRouter)


const port = 3033;

app.listen(port, () => {
    `Listening to port ${port}`
});