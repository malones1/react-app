'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();

let data = undefined;

const port = 1111;

require('./data-source').init().then((buf) => {
    data = buf;
});

// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// app.use(bodyParser.urlencoded({
//     extended: true // to support URL-encoded bodies
//   })); 
app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(express.static('./../public'))
app.use('/dist', express.static('./../dist'))

app.get('/vote', (req, res) => {
    res.json(data);
});

app.post('/toVote', (req, res) => {
    console.log(JSON.parse(req.body));
});

app.listen(port, () => console.log('Voting service listening on port %s!', port))