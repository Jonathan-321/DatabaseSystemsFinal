const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Planet = sequelize.define('Planet', {
  planet_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  galaxy: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'PLANETS',
  timestamps: false
});

module.exports = Planet;

