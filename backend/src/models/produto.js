'use strict';
const Sequelize = require('sequelize');

class Produto extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        item:Sequelize.STRING,
        quantidade:Sequelize.INTEGER,
        valor:Sequelize.FLOAT
    }, {
      sequelize
    }
    );
    return this
  }
}
module.exports = Produto;