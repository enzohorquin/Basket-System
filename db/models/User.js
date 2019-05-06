const Sequelize = require('sequelize');
const db = require('../db');
//Schema User
var User =  db.sequelize.define(
  'user',
  {
    id_user: {
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
     
    },
    username:     {
      type:Sequelize.STRING,
      allowNull:false
    },
    email: {
      type: Sequelize.STRING,
      allowNull:false
    },
    adress: {
        type: Sequelize.STRING,
        allowNull:false
    },
    password:   {
      type: Sequelize.STRING,
      allowNull:false
    },
    date:    {
      type: Sequelize.DATE,
      allowNull:true,
      defaultValue: Sequelize.NOW,
    }
  },{
    timestamps:false,
    freezeTableName: true
  }
)

module.exports = User;