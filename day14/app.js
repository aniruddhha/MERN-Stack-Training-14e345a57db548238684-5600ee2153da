const express = require('express');
const path = require('path');
const logger = require('morgan');
const expressJwt = require('express-jwt');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use(expressJwt({ secret: 'aaaaa', algorithms: ['HS256'] }))
app.use('/users', usersRouter);

module.exports = app;
