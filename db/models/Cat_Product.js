const Sequelize = require('sequelize');
const db = require('../db');


var cat_Product =  db.sequelize.define(
    'cat_product',
    {
      id: {
        type:Sequelize.STRING,
        primaryKey:true
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      }
    },{
      timestamps:false,
      freezeTableName: true
    }
  )
  
  module.exports = cat_Product;