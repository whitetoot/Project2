//require('dotenv').config()
const keys = process.env.BETTERDOC_ID;
console.log("keys", keys);

const router = require("express").Router();
const db = require("../models");

const axios = require("axios");
router.get("/api/products", async (req, res) => res.json((await db.Product.findAll({}))));
router.get("/api/doctors", async (req, res) => {
    console.log("keys", keys)
    axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychiatrist&location=ma-boston&skip=0&limit=10&user_key=${keys}`).then(function (result) {
        res.json(result.data.data);
    })
})

router.post("/api/product", (req, res) => res.json({}));
router.get("/api/product/:id", async (req, res) => {
    res.json(await db.Product.findOne({
        where: {
            id: req.params.id
        }
    }))
});
module.exports = router;