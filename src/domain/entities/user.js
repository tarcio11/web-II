'use strict';
const { Model, Sequelize } = require('sequelize');
class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      cpf: Sequelize.STRING,
      address: Sequelize.STRING,
    }, {
      sequelize,
    }); 
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Agency, { foreignKey: 'agency_id', as: 'agency' });
  }
}

module.exports = { User };