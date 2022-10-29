"use strict";

const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname + '')));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.set('view engine', 'njk');

nunjucks.configure(path.join(__dirname + '/'), {
    autoescape: true,
    express: app
});

app.get("/", (req, res) => {
    res.render("pages/Magic/index.njk");
});

app.get("/magic", (req, res) => {
    res.render("pages/Magic/index.njk");
});

app.get("*", (req, res) => {
    // res.status(404).redirect("/magic");
    res.status(404).render("pages/404/index.njk");
})

app.listen(port, () => {
    console.log("we are on " + port);
});
