const express = require("express");
const cors = require('cors')
const todoRouter = require("./routes/todoRoutes");

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use("/api/v1/todos",todoRouter);

module.exports = app;