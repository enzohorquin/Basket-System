var getProductsCategories =  require('./category_service'); 
const callApi = () => {
  const categorias =  getProductsCategories(); 
}
module.exports = callApi;

