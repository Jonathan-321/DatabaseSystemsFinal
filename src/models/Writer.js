const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Writer = sequelize.define('Writer', {
  writer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  notable_works: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'WRITERS',
  timestamps: false
});

module.exports = Writer;

