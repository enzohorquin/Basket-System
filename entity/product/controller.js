const mysqlService = require('../../service/mysql');

const queries = require ('./queries') ;
const CERO = 0;
exports.all = (req, res, next) => {
    
    mysqlService.executeQuery(queries.getAllProducts,[],(err,results) => {

        if(err){
            res.status(400).json({data:'Internal Server Error'}); 
        }
        else{
        if(results.length === CERO){
            res.status(400).json({data:'Sin Productos'});
        }
        else{
            res.status(200).json({data:results,status:"Get Products Succesful"});
            }
        }
    }); 
    
};

exports.search = (req,res,next) => {

    let name = req.params.title; 

    mysqlService.executeQuery(queries.getProductByName,[ name ],(err, results) => {
       
        if(err){
            res.status(400).json({status:'Internal Server Error'}); 
            console.log(err);
        }
        else
        {
        if(results.length === CERO){
            res.status(400).json({status:'Sin Productos'});
        }
        else{
            res.status(200).json({data:results,status:"Get Products Succesful"});
        }
    }
    }); 
}

    exports.search_both = (req,res,next) => {

        let name = req.params.title; 
        let id = req.params.category_id; 
    
        mysqlService.executeQuery(queries.getProductByCatAndTitle,[ name, id ],(err, results) => {
           
            if(err){
                res.status(400).json({status:'Internal Server Error'}); 
                console.log(err);
            }
            else
            {
            if(results.length === CERO){
                res.status(400).json({status:'Sin Productos'});
            }
            else{
                res.status(200).json({data:results,status:"Get Products Succesful"});
            }
        }
        }); 
    }
    exports.search_by_cat = (req,res,next) => {
        let id = req.params.category_id; 
        console.log(id);
    
        mysqlService.executeQuery(queries.getProductByCategory,[ id ],(err, results) => {
           console.log(queries.getProductByCategory);
            if(err){
                res.status(400).json({status:'Internal Server Error'}); 
                console.log(err);
            }
            else
            {
            if(results.length === CERO){
                res.status(400).json({status:'Sin Productos'});
            }
            else{
                res.status(200).json({data:results,status:"Get Products Succesful"});
            }
        }
        }); 

    } ;
    
