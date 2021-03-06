var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var cors = require('cors');

var citiesRouter = require('./routes/api/cities');
var stationsRouter = require('./routes/api/station_names');
var pm25Router = require('./routes/api/pm25');
var all_by_staionRouter = require('./routes/api/all_by_station');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photo_app');
var db = mongoose.connection;
db.once('open', function() {
  console.log('connected');
});

var app = express();

app.set('AppKey','5j1znBVAsnSf5xQyNQyq');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/api/cities',cors(),citiesRouter);
app.use('/api/station_names',cors(),stationsRouter);
app.use('/api/pm2_5',cors(), pm25Router);
app.use('/api/all_by_station',cors(), all_by_staionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
