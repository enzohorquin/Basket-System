const Sequelize = require('sequelize');
const db = require('../db');

var Product_Order =  db.sequelize.define(
    'product_order',
    {  
      id_order:{
        type:Sequelize.INTEGER,
        primaryKey:true, 
        references:{
            model:'order',
            key:'id_order'
        }
  
      },
      id_product: {
        type:Sequelize.STRING,
        references: {
          model:'product',
          key:'id'
        },
        primaryKey:true
      }
    },{
      timestamps:false,
      freezeTableName: true
    }
  )
  
  module.exports = Product_Order; 