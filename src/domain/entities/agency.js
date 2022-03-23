'use strict';
const { Model, Sequelize } = require('sequelize');
class Agency extends Model {
  static init(sequelize) {
    super.init({
      number: Sequelize.STRING,
      address: Sequelize.STRING,
    }, {
      sequelize,
    }); 
    return this;
  }
}

module.exports = { Agency }