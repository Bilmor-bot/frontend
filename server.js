"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hello\n");
});

app.listen(port, () => {
    console.log('we are on ' + port);
});
