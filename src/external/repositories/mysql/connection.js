const Sequelize = require('sequelize');

const { User } = require('../../../domain/entities/user');
const { Agency } = require('../../../domain/entities/agency');
const { Account } = require('../../../domain/entities/account');
const { Cards } = require('../../../domain/entities/cards');

const models = [User, Agency, Account, Cards];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize('mysql://root:mysql@localhost:3306/data_baking');

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();