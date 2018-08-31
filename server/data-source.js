'use strict';

const fs = require('fs');

var data_json = JSON.parse(fs.readFileSync('data.json'));

// fs.readFile('data.json', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     data_json = JSON.parse(data);
// });


module.exports = data_json;