const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const data_source = require('./data-source')

const port = 1111;

app.use(express.static('./../public'))
app.use('/dist', express.static('./../dist'))

app.get('/vote', (req, res) => {
    res.json(data_source);
});

app.listen(port, () => console.log('Voting service listening on port %s!', port))