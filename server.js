"use strict";

import 'dotenv/config';

import fs from "fs";
import https from 'https';
import path from "path";
import express from "express";
import nunjucks from "nunjucks";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";

import defaultWebpackConfig from "./webpack.config.js";
import controller from './api/controller/index.js';

const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;
const isProduction = process.env.NODE_ENV === 'production';

app.set('view engine', 'njk');

app.use((req, res, next) => {
    res.locals.buildImageUrl = function (path) {
        return `https://res.cloudinary.com/hzqoxcal2/image/upload/v1667252707/${path}`;
    }

    next();
});

app.use(express.static(path.join('./')));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(controller(router));

nunjucks.configure(path.join('./'), {
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

app.get("/skills/subject", (req, res) => {
    res.render("pages/Skills/Subject/index.njk");
});

app.get("/admin", (req, res) => {
    res.render("pages/Admin/index.njk");
});

app.get("*", (req, res) => {
    // res.status(404).redirect("/magic");
    res.status(404).render("pages/404/index.njk");
});

app.listen(port, () => {
    if (!isProduction) {
        const overrideWebpackConfig = {
            mode: "development"
        };
        const webpackConfig = Object.assign(defaultWebpackConfig, overrideWebpackConfig);
        const compiler = webpack(webpackConfig);

        app.use(
            webpackDevMiddleware(compiler, {
                writeToDisk: true
            })
        );
    }

    console.log("we are on " + port);
});


// var privateKey  = fs.readFileSync('se/rsa.txt', 'utf8');
// var certificate = fs.readFileSync('se/bilmor-cert.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(8443);
