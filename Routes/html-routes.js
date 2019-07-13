const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/main.html")));

router.get("/about", (req, res) =>
    res.sendFile(path.join(__dirname, "/about.html")));

router.get("/cases", (req, res) =>
    res.sendFile(path.join(__dirname, "/cases.html")));

router.get("/contact", (req, res) =>
    res.sendFile(path.join(__dirname, "/contact.html")));

router.get("/feature", (req, res) =>
    res.sendFile(path.join(__dirname, "/feature.html")));


module.exports = router;