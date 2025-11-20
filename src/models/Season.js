const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Season = sequelize.define('Season', {
  season_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  showrunner_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'WRITERS',
      key: 'writer_id'
    }
  },
  series_number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'SEASONS',
  timestamps: false
});

module.exports = Season;

