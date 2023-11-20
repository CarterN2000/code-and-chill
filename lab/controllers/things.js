const Thing = require('../models/thing')

module.exports = {
    new: newThing,
    index,
}

function newThing(req, res) {
    res.render('things/new', {
        errorMsg: ''
    })
}

function index(req, res) {
    res.render('things/index', {
        errorMsg: ''
    })
}