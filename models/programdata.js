'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProgramData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProgramData.init({
    nama_program: DataTypes.STRING,
    deskripsi_program: DataTypes.TEXT,
    harga_program: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProgramData',
  });
  return ProgramData;
};