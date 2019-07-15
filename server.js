const express = require("express");
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const app = express();
const apiRoutes = require("./Routes/api-routes");
const htmlRoutes = require("./Routes/html-routes");
const db = require("./models");
const keys = require("./keys");

// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);
app.use(htmlRoutes);
app.use(express.static("public"));
//app.use(calendar);

var connection = require("./config/connection.js");


//the force statement is to be used to the data base does not get wiped everytime this code runs
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT,
        () => console.log(`http://localhost:${PORT}`));
});
