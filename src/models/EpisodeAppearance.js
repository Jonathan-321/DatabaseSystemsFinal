const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const EpisodeAppearance = sequelize.define('EpisodeAppearance', {
  episode_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'EPISODES',
      key: 'episode_id'
    }
  },
  character_type: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  character_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'CHARACTER',
      key: 'character_id'
    }
  },
  screen_time_min: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'EPISODE_APPEARANCES',
  timestamps: false,
  indexes: [
    {
      name: 'idx_appearance_episode',
      fields: ['episode_id']
    },
    {
      name: 'idx_appearance_character',
      fields: ['character_id']
    }
  ]
});

module.exports = EpisodeAppearance;

