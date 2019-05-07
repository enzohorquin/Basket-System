const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();

/* 
var callApi =  require('./public/scripts/product_service'); 
callApi();
Si se ejecuta el servidor por primera vez, comentar la linea 14 y 15. (Scripts de insercion en la base de datos) 
const db = require('./db/db');
const Schema = require('./db/models/Schema');
 */

let router = require('./routes.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

//Router
app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { error: err });
});
app.listen(3000, function () {
  console.log("Express server listening on port 3000");
  });

module.exports = app;
