const express = require('express')
const path = require('path')
const app = express()

const port = 1111;

app.use(express.static('./../public'))
app.use('/dist', express.static('./../dist'))

app.listen(port, () => console.log('Voting service listening on port %s!', port))