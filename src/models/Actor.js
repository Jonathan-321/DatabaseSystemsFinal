const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Actor = sequelize.define('Actor', {
  actor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  nationality: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'ACTORS',
  timestamps: false
});

module.exports = Actor;

