// var createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let ejs = require('ejs');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//本地错误显示
app.use(function (req,res,next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err)
});

//开发者错误处理
if (app.get('env') === 'development'){
  app.use(function (err,req,res,next) {
    res.status(err.status || 500);
    console.log(res.status(err.status || 500));
    res.render('error',{
      messages : err.message,
      errno : "development error"
    })
  })
}

//访客错误处理
app.use(function (err,req,res,next) {
  res.status(err.status || 500);
  res.render('error',{
    messages : err.message,
    errno : "production error"
  })
});

module.exports = app;
