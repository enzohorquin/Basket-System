const Sequelize = require('sequelize');
const db = require('../db');

var Product =  db.sequelize.define(
    'product',
    {
      id: {
        type:Sequelize.STRING,
        primaryKey:true
      },
      title:{
        type:Sequelize.STRING,
        allowNull:false
      },
      thumbnail:{
        type:Sequelize.STRING,
        allowNull:false
      },
      category_id: {
        type:Sequelize.STRING,
        references: {
          model:'cat_product',
          key:'id'
        },
        allowNull:false
      },
      price:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
    },{
      timestamps:false,
      freezeTableName: true
    }
  )
  
  module.exports = Product;