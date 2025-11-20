const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Doctor = sequelize.define('Doctor', {
  doctor_id: {
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
  incarnation_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  catchphrase: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'DOCTOR',
  timestamps: false,
  indexes: [
    {
      name: 'idx_doctor_actor',
      fields: ['actor_id']
    }
  ]
});

module.exports = Doctor;

