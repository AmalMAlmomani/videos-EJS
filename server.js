//video 2- Getting Started
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//The Path module provides a way of working with directories and file paths.
var path = require('path');

var app = express();

app.use(bodyParser());
app.use(cors());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//simple route
app.get('/', function (request, response) {
    response.render('index', {
        //video 3- Injecting values into the views
        people: [
            { name: 'amal' },
            { name: 'saif' }
        ]
    });

});

app.listen(8000, function () {
    console.log("heard on 8000");
});


//video 3- Injecting values into the views

