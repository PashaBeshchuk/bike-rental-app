const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routers = require('../routers')

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((cli, res, next) => {
    res.setHeader('Allow', 'http://localhost:3000')
    res.setHeader("Content-Type", "application/json; charset=utf-8")
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', "true")
    
    next()
})

app.use(routers);
app.use(express.urlencoded({extended: true}));

module.exports = app;