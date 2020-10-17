const express = require('express');
var app = express();
var routes ={
    index: require('./routes/index'),
    users: require('./routes/users'),
};

// Arquivos estaticos
app.use(express.static(__dirname + '/public'));

// Permite capiturar dados via post
app.use(express.urlencoded({ extended: true }));

app.use("/", routes.index);

app.listen(3000);