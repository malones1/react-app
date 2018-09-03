'use strict';

const fs = require('fs');
const filename = 'data.json';


let get = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            console.log("Reading json from %s", filename);
            if (err) {
                reject(err);
            }

            resolve(JSON.parse(data));
        });
    });
};

exports.init = async () => {
    return await get();
};