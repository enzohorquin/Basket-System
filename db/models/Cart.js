const Sequelize = require('sequelize');
const db = require('../db');

var Cart =  db.sequelize.define(
    'cart',
    {
      id_user:  {
        type:Sequelize.INTEGER,
        references: {
          model:'user',
          key:'id_user'
        },
        primaryKey:true
    },
    id_product: {
        type:Sequelize.STRING,
        references: {
          model:'product',
          key:'id'
        },
        allowNull:false
      }
    },{
      timestamps:false,
      freezeTableName: true
    }
  )
  
  module.exports = Cart; 