const mysqlService = require('../../service/mysql');
const queries = require ('./queries') ;
const queries_cart = require ('../cart/queries') ; 
const queries_product = require('../product/queries');
const CERO = 0;
const async = require ('async');

exports.create_order = (req,res,next) => {

    const id_user = req.decoded.id_user; 
    let id_order;  
    let products = [] ; 
    

            products = req.body.cart; 
            console.log(products);
          
            mysqlService.executeQuery(queries.insertOrder,[ id_user, new Date() ],(err,results) => {
          
            if(err){
                
                res.status(400).json({data:'Internal Server Error'}); 
            }
            else{
                id_order = results.insertId; 
                for(let i =0 ; i<products.length ; i++){
                    mysqlService.executeQuery(queries.insertIntoProductOrder,[ id_order, products[i].id, products[i].count ],(err,results) => {
                       if(err){
                           
                           res.status(400).json({data:'Internal Server Error'}); 
                       }
                    
                   }); 
            
               } 
               res.status(200).json({status:"Order Creada"}); 
                    
        }
    });    
        }
    


exports.all = (req,res,next) => { 

    let resultados = []; 
    const id_user = req.decoded.id_user; 
    mysqlService.executeQuery(queries.getProductOrder,[ id_user ],(err,results) => {

        if(err){
            console.log(err);
            res.status(400).json({data:'Internal Server Error'}); 
        }
        else{
          
        if(results.length !== CERO){
        
        async.mapLimit(results, 10, (result, cb) => {
            mysqlService.executeQuery(queries_product.getProductById, [result.id_product], (err,results_query) => {
                if (err) {
                    return cb(err);
                }
                resultados.push(results_query)
                return cb(null)
            });
        }, (err, results) => {

            if(err){ 
                res.status(400).json({data:'Internal Server Error'}); 
            }
            else{
                res.status(200).json({data:resultados,status:"Compras realizadas obtenidas con exito"});
            }

        });
       
    }
        }
    }); 

}