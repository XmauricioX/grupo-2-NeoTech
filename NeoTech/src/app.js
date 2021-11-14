var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let methodOverride = require('method-override')
let session = require('express-session')
////////////franco//////////////
var logMiddleware = require('./middlewares/logMiddleware')
///////////////////////////////

/* ENRUTADORES */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var adminRouter = require('./routes/admin');
var apiRouter = require('./routes/apiRoutes/apiProducts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* MIDDLEWARES NIVEL APLICACION */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({ 
  secret: 'mySecret',
  resave: false, 
  saveUninitialized: true
}));
////////////franco//////////////
app.use(logMiddleware)

/* RUTAS */
app.use('/', indexRouter);
app.use('/cuenta', usersRouter);
app.use('/producto', productRouter);
app.use('/administrador', adminRouter);
app.use('/api', apiRouter);



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