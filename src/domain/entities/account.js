'use strict';
const { Model, Sequelize } = require('sequelize');
class Account extends Model {
  static init(sequelize) {
    super.init({
      balance: Sequelize.FLOAT,
      number: Sequelize.STRING,
      rg_client: Sequelize.STRING,
      cpf_client: Sequelize.STRING,
      status: Sequelize.BOOLEAN,
    }, {
      sequelize,
    }); 

    this.addHook('beforeCreate', (account) => {
      account.status = false;
      account.number = `00000-${account.id}`;
      account.balance = 500;
    })
    
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Agency, { foreignKey: 'agency_id', as: 'agency' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = { Account }