import express, { Application, Request, Response } from "express";
import router from "./router/studentRouter";
const port = 4050;
const app: Application = express()
app.use(express.json())
require("./config/db")


app.get("/", (req:express.Request, res:express.Response) => {
    res.status(200).json({
        message: "server don dey run"
    });
});

app.use("/api", router)

app.listen(port, ()  => {
    console.log(`server don sup PORT: ${port}`)
})