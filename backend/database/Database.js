const Sequelize = require('sequelize');
//const { Database } = require('sqlite3');
const Produto = require('../src/models/produto');
const databaseConfig = require('../config/database');
const models = [Produto];

class Database {
  constructor() {
    this.init();
  }

  init(){

    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))

  }
}

module.exports = new Database();