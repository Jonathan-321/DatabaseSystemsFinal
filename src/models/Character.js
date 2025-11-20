const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Character = sequelize.define('Character', {
  character_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  species_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'SPECIES',
      key: 'species_id'
    }
  },
  doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'DOCTOR',
      key: 'doctor_id'
    }
  },
  enemy_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ENEMIES',
      key: 'enemy_id'
    }
  }
}, {
  tableName: 'CHARACTER',
  timestamps: false
});

module.exports = Character;

