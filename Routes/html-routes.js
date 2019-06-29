const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/main.html")));

router.get("/contact", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/contact.html")));

router.get("/feature", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/feature.html")));

router.get("/contact", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/contact.html")));

router.get("/cases/:id", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/cases.html")));

module.exports = router;