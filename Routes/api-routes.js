const router = require("express").Router();
const db = require("../models");

router.get("/api/case", async (req, res) => res.json((await db.Case.findAll({}))));

router.post("/api/case", (req, res) => res.json({}));
router.get("/api/case/:id", async (req, res) => {
    res.json(await db.Case.findOne({
        where: {
            id: req.params.id
        }
    }))
});
module.exports = router;