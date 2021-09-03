
var express = require('express');
var app = express();
var path = require('path');
let methodOverride = require('method-override')
let session = require('express-session')
var cookieSession = require('cookie-session')


/* ENRUTADORES */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var adminRouter = require('./routes/admin');
////////////franco//////////////
var logMiddleware = require('./middlewares/logMiddleware')
///////////////////////////////


/* VISTAS */
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
////////////franco//////////////
app.use(logMiddleware)
///////////////////////////////

/* MIDDLEWARES NIVEL APLICACION */
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
  secret: 'mySecret',
  resave: false, 
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

/* RUTAS */

app.use('/', indexRouter);
app.use('/cuenta', usersRouter);
app.use('/producto', productRouter);
app.use('/administrador', adminRouter);

///////////////////////////////////////////////////////////
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(cookieParser());

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