"use strict";

require("dotenv").config();

const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = process.env.PORT || 8000;
const isProduction = process.env.NODE_ENV === 'production';

app.set('view engine', 'njk');

app.use(express.static(path.join(__dirname + '')));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

nunjucks.configure(path.join(__dirname + '/'), {
    watch: true,
    noCache: true,
    autoescape: true,
    express: app
});

app.get("/", (req, res) => {
    res.render("pages/Skills/index.njk");
});

app.get("/skills", (req, res) => {
    res.render("pages/Skills/index.njk");
});

app.get("/skills/elemental", (req, res) => {
    res.render("pages/Skills/Elemental/index.njk");
});

app.get("/skills/general", (req, res) => {
    res.render("pages/Skills/General/index.njk");
});

app.get("/skills/deseases", (req, res) => {
    res.render("pages/Skills/Deseases/index.njk");
});

app.get("*", (req, res) => {
    // res.status(404).redirect("/magic");
    res.status(404).render("pages/404/index.njk");
})

app.listen(port, () => {
    if (!isProduction) {
        const config = require("./webpack.config");
        const webpack = require("webpack");
        const webpackDevMiddleware = require("webpack-dev-middleware");
        const compiler = webpack(config);

        app.use(
            webpackDevMiddleware(compiler, {
                writeToDisk: true
            })
        );
    }

    console.log("we are on " + port);
});
