const mysqlService = require('../../service/mysql');

const queries = require ('./queries') ;
const CERO = 0;


exports.add = (req,res,next) => {
   
    mysqlService.executeQuery(queries.addProduct,[ req.body.id_product, req.body.id_user ],(err,results) => {

        if(err){
            console.log(err);
            res.status(400).json({data:'Internal Server Error'}); 
        }
        else{
          
            res.status(200).json({status:"Producto agregado al carrito satisfactoriamente"});
            
        }
    }); 
    
}

exports.delete = (req,res,next) => {
    mysqlService.executeQuery(queries.deleteProduct,[ req.body.id_product, req.body.id_user ],(err,results) => {

        if(err){
            
            res.status(400).json({data:'Internal Server Error'}); 
        }
        else{
          
            res.status(200).json({status:"Producto eliminado del carrito satisfactoriamente"});
            
        }
    }); 
    
}