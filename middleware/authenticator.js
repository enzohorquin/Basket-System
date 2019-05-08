const jwt = require('jsonwebtoken'); 
const jwt_decode = require('jwt-decode');

exports.auth = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    
    if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
    
  }
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        
        req.decoded = jwt_decode(token);
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

/*
{
		"id_product":"MLA640967405",
		"id_user":"4"
}
*/