const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Tardis = sequelize.define('Tardis', {
  tardis_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  owner_doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'DOCTOR',
      key: 'doctor_id'
    }
  },
  type: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  chameleon_status: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'TARDIS',
  timestamps: false
});

module.exports = Tardis;

