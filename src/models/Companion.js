const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Companion = sequelize.define('Companion', {
  companion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  actor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ACTORS',
      key: 'actor_id'
    }
  },
  first_episode_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'EPISODES',
      key: 'episode_id'
    }
  },
  last_episode_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'EPISODES',
      key: 'episode_id'
    }
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  species_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'SPECIES',
      key: 'species_id'
    }
  },
  home_planet_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'PLANETS',
      key: 'planet_id'
    }
  }
}, {
  tableName: 'COMPANIONS',
  timestamps: false
});

module.exports = Companion;

