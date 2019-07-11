// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require("../config/connect");

// Routes
// =============================================================
module.exports = function (app) {
    // Get all forms
    app.get("/api/all", function (req, res) {
        var dbQuery = "SELECT * FROM forms";

        connection.query(dbQuery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    // Add a chirp
    app.post("/api/new", function (req, res) {
        console.log("Form Data:");
        console.log(req.body);

        var dbQuery = "INSERT INTO forms (name,email, message, body, created_at) VALUES (?,?,?,?,?)";

        connection.query(dbQuery, [req.body.name, req.body.email, req.body.message, req.body.body, req.body.created_at], function (err, result) {
            if (err) throw err;
            console.log("Form Successfully Saved!");
            res.end();
        });
    });
};
