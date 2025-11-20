const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const EpisodeLocation = sequelize.define('EpisodeLocation', {
  episode_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'EPISODES',
      key: 'episode_id'
    }
  },
  planet_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'PLANETS',
      key: 'planet_id'
    }
  },
  visit_order: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
  tableName: 'EPISODE_LOCATIONS',
  timestamps: false
});

module.exports = EpisodeLocation;

