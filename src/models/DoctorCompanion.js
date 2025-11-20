const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const DoctorCompanion = sequelize.define('DoctorCompanion', {
  doctor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'DOCTOR',
      key: 'doctor_id'
    }
  },
  companion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'COMPANIONS',
      key: 'companion_id'
    }
  },
  start_episode_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'EPISODES',
      key: 'episode_id'
    }
  },
  end_episode_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'EPISODES',
      key: 'episode_id'
    }
  }
}, {
  tableName: 'DOCTOR_COMPANIONS',
  timestamps: false
});

module.exports = DoctorCompanion;

