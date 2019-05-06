const Sequelize = require("sequelize");
const db = {}
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
/sites/MLA/search?category={Category_id}&official_store_id=all&access_token=$ACCESS_TOKEN	Buscar todos los items enumerados en una determinada categoría en tiendas oficiales. */


//https://api.mercadolibre.com/sites/MLA/categories
