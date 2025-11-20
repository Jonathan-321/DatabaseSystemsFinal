const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Director = sequelize.define('Director', {
  director_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'DIRECTORS',
  timestamps: false
});

module.exports = Director;

