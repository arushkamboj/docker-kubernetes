const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("I am a containerized Node Application!!!");
});

app.listen(8081, () => {
    console.log("Listening on port 8080!");
});