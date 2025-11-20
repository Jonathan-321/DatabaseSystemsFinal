const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Enemy = sequelize.define('Enemy', {
  enemy_id: {
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
  species_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'SPECIES',
      key: 'species_id'
    }
  },
  threat_level: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 10
    }
  }
}, {
  tableName: 'ENEMIES',
  timestamps: false,
  indexes: [
    {
      name: 'idx_enemy_threat',
      fields: ['threat_level']
    }
  ]
});

module.exports = Enemy;

