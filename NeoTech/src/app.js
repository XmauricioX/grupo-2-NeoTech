var express = require('express');
var app = express();

/* ENRUTADORES */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var adminRouter = require('./routes/admin');

/* VISTAS */
app.set('view engine', 'ejs');
app.use(express.static('public'));

/* app.set('views', './views/users'); */

app.use(express.static('public'));

/* RUTAS */
app.use('/', indexRouter);
app.use('/cuenta', usersRouter);
app.use('/producto', productRouter);
app.use('/administrador', adminRouter);












///////////////////////////////////////////////////////////

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/* RUTAS */



app.get('/market', function(req, res,) {
  res.sendFile(path.join(__dirname, '/views/market.html'))
});

app.get('/market-full', function(req, res,) {
  res.sendFile(path.join(__dirname, '/views/market-full.html'))
});

app.get('/product-detail', function(req, res,) {
  res.sendFile(path.join(__dirname, '/views/product-detail.html'))
});

app.get("/product-list", function (req,res){
  res.sendFile(path.join(__dirname, "/views/product-list.html"))
});



// ADMIN PANEL

app.get("/admin-panel", function(req,res){
  res.sendFile(path.join(__dirname, "/views/admin-panel.html"))
});

app.get("/admin-add-product", function(req,res){
  res.sendFile(path.join(__dirname, "/views/admin-add-product.html"))
});

app.get("/admin-edit-product", function(req,res){
  res.sendFile(path.join(__dirname, "/views/admin-edit-product.html"))
});

app.get("/admin-edit-product-form", function(req,res){
  res.sendFile(path.join(__dirname, "/views/admin-edit-product-form.html"))
});

app.get("/admin-users", function(req,res){
  res.sendFile(path.join(__dirname, "/views/admin-users.html"))
});

app.get("/admin-sell-stock", function(req,res){
  res.sendFile(path.join(__dirname, "/views/admin-sell-stock.html"))
});

app.get("/admin-edit-account", function(req,res){
  res.sendFile(path.join(__dirname, "/views/admin-edit-account.html"))
});

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
  res.render('error');
});

module.exports = app;
