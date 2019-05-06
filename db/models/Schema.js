const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');
const Cart = require('./Cart');
const Cat_Product = require('./Cat_Product');
const Product = require('./Product');
const Order = require('./Order');
const Product_Order = require('./Product_Order');



db.sequelize.sync().then(function(){
  console.log("Model Created");
}).catch(function(err){
  console.log(err);
})

module.exports = {
  User: User,
  Cart: Cart,
  Cat_Product: Cat_Product,
  Product: Product,
  Order: Order,
  Product_Order:Product_Order
};