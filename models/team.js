module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('team', {
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

    Team.associate = (models) => {
        Team.hasMany(models.driver);
    };

    return Team;
}