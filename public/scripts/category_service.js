
const fetch = require('node-fetch');
const models = require('../../db/models/Schema'); 

const getProductsCategories =  () => {

     fetch('https://api.mercadolibre.com/sites/MLA/categories', {
        method: 'GET',
        headers: {
        Accept: 'application/json',
      },
        },).then( response => {
            
            return response.json()})
        .then(response => {
           
          
            for(let i=0; i<response.length;i++){
                insertOnDB(response[i]);
            } 
            return response; 
        })
        .then(response=>{
            fetchingProducts(response);
        }).catch(err => console.log(err)); 
}

const insertOnDB = (data) => {
    const categoria = {
        id:data.id,
        name:data.name
    }

    models.Cat_Product.create(categoria).then(result => console.log("Categoria Agregada "+categoria.name))
    .catch(err=>console.log(err));

}

const fetchingProducts = (response) => {
    for (let i=0; i<response.length ; i++){ 
        const categoria = response[i].id;
        
        console.log("NUEVA CATEGORIA: ");
        console.log(categoria);
        fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${response[i].id}&official_store_id=all`, {
            method: 'GET',
            headers: {
            Accept: 'application/json',
          },
            },).then(response => {return response.json()})
            .then(response =>{
                
                for(let i=0; i<response.results.length;i++){   
                    insertProductOnDB(response.results[i],categoria);
                }
                    })
            .catch(err => console.log(err)) ; 
    }
}

const insertProductOnDB = (data,categoria) => {
    
    const producto = {
        id: data.id,
        title: data.title ,
        thumbnail: data.thumbnail,
        category_id:categoria ,
        price: data.price
    }
    
    models.Product.create(producto).then(result => console.log("Producto Agregado"+producto.title)
    ).catch(err => console.log(err));
}
module.exports = getProductsCategories ;