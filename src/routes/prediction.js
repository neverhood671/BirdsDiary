const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');
module.exports = router;

const API_KEY = 'gtgbh6iucg0'

router.get('/', (req, res) => {
    const {year, month, day, regionCode} = req.query;

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    return fetch(`https://api.ebird.org/v2/data/obs/${regionCode}/historic/${year}/${month}/${day}?key=${API_KEY}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return res.send(JSON.parse(result).map(bird => bird.sciName))
        })
        .catch(err => {
            console.log(err)
            return res.send('Sorry, we have no prediction for you =(( Please, try another date or place')
        });
});
