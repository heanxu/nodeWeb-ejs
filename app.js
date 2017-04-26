'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const router = require('./routes').router;
const app = express();
const path = require('path');

/*
    跨域
  */
app.all('*', (req, res, next)=> {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    res.set('Access-Control-Max-Age', 3600 * 24);
    next();
});

/*
    常用中间件
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.set('view engine','ejs');

/*
  路由
 */
app.use('/',router);


app.listen(3000, ()=>{
  console.log('>>| App listen on 3000...');
});
exports.app = app;
