
const router = require("express").Router();
const db = require("../models");

router.post("/api/form", (req, res) => {
    // use sequelize to store data into database
    db.Form.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }).then(function() {
        res.redirect("/");
    });
});

module.exports = router;


