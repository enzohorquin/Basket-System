const Sequelize = require("sequelize");
const db = {}; 
const sequelize = new Sequelize('basket-system','root','123456',{
  host:'localhost',
  dialect:'mysql',
  pool: {
    max:5,
    min:0,
    acquire:30000,
    idle:1000
  }
})
sequelize.authenticate()
  .then(() => {
    console.log('connected to DB');
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize ;

module.exports = db;
/*
https://api.mercadolibre.com/sites/MLA/categories

https://api.mercadolibre.com/sites/MLA/search?category={categoria}&official_store_id=all 
Devuelve un Json, acceso en .results

*/