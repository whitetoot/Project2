module.exports = function (sequelize, DataTypes) {
    var Form = sequelize.define("Form", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        message: DataTypes.STRING,
    });

    return Form;

};