const jwt = require('jsonwebtoken'); 
const bcrypt = require ('bcrypt'); 
const mysqlService = require('../../service/mysql');
const queries = require ('./queries') ;
const redisService = require('../../service/redis');
const config = require('../../config/config');
const CERO = 0;
const validateRegisterInput = require('../../middleware/register_validator');
const validateLoginInput = require('../../middleware/login_validator');
process.env.SECRET_KEY = config.secret;

exports.login = (req,res,next) => {

    const email = req.body.email ; 
    const password = req.body.password; 
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        
        return res.status(400).json({errors});
    }

   
    mysqlService.executeQuery(queries.userExists,[ email ],(err,results) => {

        if(err){
            res.status(400).json({errors:'Internal Server Error'}); 
        }
        if(results.length === CERO){
            errors.email = 'User not found'
            res.status(400).json({errors}); 
        }else{
            const user = results[0];
        if(bcrypt.compareSync(password,user.password)){
            let usuario = {
                id_user:user.id_user,
                email:user.email,
                password:user.password, 
                adress: user.adress
            }
            let token = jwt.sign(usuario,process.env.SECRET_KEY)
            
            res.status(200).json({data:token,status:"Usuario Logueado"});
        }else{
            
            errors.password = 'Incorrect password';
            res.status(400).json({errors}); 
        }
        }
    }); 
}

exports.signup = (req,res,next) => {

    const email = req.body.email; 
    let password = req.body.password; 
    const adress = req.body.adress;
    let hash_password; 

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    mysqlService.executeQuery(queries.userExists,[ email ],(err,results) => {

        if(err){
            res.status(400).json({data:'Internal Server Error'}); 
        }
        else {
            if(results.length === CERO){
                bcrypt.hash(password,10,(err,hash)=>{
                    hash_password = hash; 
                    console.log(hash); 
                    mysqlService.executeQuery(queries.signUp,[ email, hash_password, adress, new Date()],(err,results) => {
                        if(err){
                            console.log(err);
                            res.status(400).json({data:'Internal Server Error'}); 
                        }else
                        res.status(200).json({status:"Usuario Registrado Correctamente"});
                    })
    
                }) 
               
            }else{
                res.status(400).json({data:'Usuario ya registrado'}); 
            }
        }
       
    
});
}
