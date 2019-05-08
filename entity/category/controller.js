const mysqlService = require('../../service/mysql');
const queries = require ('./queries') ;

exports.all = (req,res,next) => {
    mysqlService.executeQuery(queries.getAllCategories,[ ],(err,results) => {

        if(err){
            res.status(400).json({data:'Internal Server Error'}); 
        }
        else{
            res.status(200).json({data:results,status:"Categorias Obtenidas con exito"})
        }
        
    }); 
}