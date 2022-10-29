"use strict";

require("dotenv").config();

const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = process.env.PORT || 8000;
const isProduction = process.env.NODE_ENV === 'production';

const config = require("./webpack.config");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const compiler = webpack(config);

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
    if (!isProduction) {
        app.use(
            webpackDevMiddleware(compiler, {
                writeToDisk: true
            })
        );
    }

    console.log("we are on " + port);
});
