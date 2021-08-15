const express = require('express');
const hbs = require('hbs');
const path = require('path');
// const bodyParser = require('body-parser')

var app = express();

hbs.registerHelper('foo', function (v1, v2, options) {
    console.log(v1, v2)
    console.log(options)
    if (v1 > v2) return options.fn(this)
    return options.inverse(this)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' })
})

app.get('/about', (req, res, next) => {
    res.render('about', { title: 'Express' })
})

app.get('/list', (req, res, next) => {

    const mobiles = [
        { os: 'android', price: 10 },
        { os: 'iOS', price: 60 },
        { os: 'windows', price: 20 },
        { os: 'symbian', price: 15 },
        { os: 'linux', price: 8 },
    ]
    res.render('list', { mobiles })
})

app.get('/save-form', (req, res, next) => {
    res.render('save')
})

app.post('/save', (req, res) => {

    // perform form processing e.g. saving form data to database
    // res.send({ sts: 'success', body: req.body })
    res.render('save')
})

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})
