module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define('driver', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        price: DataTypes.NUMBER
    },
    {
        freezeTableName: true,
    });

    Driver.associate = (models) => {
        Driver.belongsTo(models.team);
    };

    return Driver;
}