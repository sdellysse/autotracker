import express from "express";

const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});

const server = app.listen(8080, () => {
    console.log("server started");
});
