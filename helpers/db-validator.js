const { request, response } = require('express');

const { User } = require('../models/user.js');

const existeClientePorID = ( req = request, res = response ) =>{
console.log(req.params)
};

module.exports = {
    existeClientePorID
}