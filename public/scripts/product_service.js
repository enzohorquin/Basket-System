var getProductsCategories =  require('./category_service'); 
var models = require('../../db/models/Schema'); 

const callApi = () => {
  const categorias =  getProductsCategories(); 
  
}
module.exports = callApi;

