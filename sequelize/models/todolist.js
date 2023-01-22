'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToDoList.init({
    day: DataTypes.STRING,
    tasks: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ToDoList',
  });
  return ToDoList;
};