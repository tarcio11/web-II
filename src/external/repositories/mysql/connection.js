const Sequelize = require('sequelize');

const { User } = require('../../../domain/entities/user');
const { Agency } = require('../../../domain/entities/agency');

const models = [User, Agency];

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