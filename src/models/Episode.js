const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Episode = sequelize.define('Episode', {
  episode_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  season_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'SEASONS',
      key: 'season_id'
    }
  },
  writer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'WRITERS',
      key: 'writer_id'
    }
  },
  director_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'DIRECTORS',
      key: 'director_id'
    }
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  episode_number: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  air_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  runtime_minutes: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'EPISODES',
  timestamps: false,
  indexes: [
    {
      name: 'idx_episode_season',
      fields: ['season_id']
    },
    {
      name: 'idx_episode_air_date',
      fields: ['air_date']
    }
  ]
});

module.exports = Episode;

