const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const EnemyEpisode = sequelize.define('EnemyEpisode', {
  enemy_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'ENEMIES',
      key: 'enemy_id'
    }
  },
  episode_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'EPISODES',
      key: 'episode_id'
    }
  },
  role: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'ENEMY_EPISODES',
  timestamps: false
});

module.exports = EnemyEpisode;

