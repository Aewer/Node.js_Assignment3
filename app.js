const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const url = 'mongodb://localhost:27017';

mongoose.connect(url);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(3000, function () {
    console.log('App listening on port 3000');
});
