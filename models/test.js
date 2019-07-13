module.exports = function (sequelize, DataTypes) {
    var Case = sequelize.define("Case", {
        Name: DataTypes.STRING,
        Adress1: DataTypes.STRING,
        Adress2: DataTypes.STRING,
        City: DataTypes.STRING,
        State: DataTypes.STRING,
        'E-mail': DataTypes.STRING,
        Phone: DataTypes.STRING,
        // complete: DataTypes.BOOLEAN
    });

    return Case;

};