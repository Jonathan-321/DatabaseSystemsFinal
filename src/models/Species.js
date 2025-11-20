const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Species = sequelize.define('Species', {
  species_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  home_planet_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'PLANETS',
      key: 'planet_id'
    }
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  technology_level: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'SPECIES',
  timestamps: false
});

module.exports = Species;

