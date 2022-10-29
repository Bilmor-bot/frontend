"use strict";

const express = require("express");
const app = express();
const enforce = require('express-sslify');
const port = process.env.PORT || 8000;

app.use(enforce.HTTPS({ trustProtoHeader: true }));
// app.use(enforce.HTTPS({ trustXForwardedHostHeader: true }));

app.get("/", (req, res) => {
    res.send("hello\n");
});

app.listen(port, () => {
    console.log('we are on ' + port);
});
