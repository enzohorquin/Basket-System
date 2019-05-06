const Sequelize = require('sequelize');
const db = require('../db');

var Order =  db.sequelize.define(
    'order',
    {  
      id_order:{
        type:Sequelize.INTEGER,
        primaryKey:true, 
        autoIncrement:true
      },
      id_user: {
        type:Sequelize.INTEGER,
        references: {
          model:'user',
          key:'id_user'
        },
        primaryKey:true
    }
    },{
      timestamps:false,
      freezeTableName: true
    }
  )
  
  module.exports = Order; 