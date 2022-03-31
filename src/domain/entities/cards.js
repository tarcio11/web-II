'use strict';
const { Model, Sequelize } = require('sequelize');
class Cards extends Model {
  static init(sequelize) {
    super.init({
      number: Sequelize.STRING,
      validate: Sequelize.STRING,
      codSec: Sequelize.STRING,
      status: Sequelize.BOOLEAN,
      cvv: Sequelize.STRING,
      type: Sequelize.STRING,
      limit: Sequelize.FLOAT,
    }, {
      sequelize,
    }); 
    
    this.addHook('beforeCreate', (card) => {
      // random 11 number 
      card.number = String(Math.floor(Math.random() * 1000000000000));
      card.validate = new Date('2023-01-01');
      card.codSec = String(Math.floor(Math.random() * 1000));
      card.status = false;
      card.cvv = '123';
      card.limit = 1000;
    })

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = { Cards }