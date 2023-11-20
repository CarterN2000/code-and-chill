const Thing = require('../models/thing')

module.exports = {
    new: newThing,
    index,
    create,
}

function newThing(req, res) {
    res.render('things/new', {
        errorMsg: ''
    })
}

async function index(req, res) {
    const allThings = await Thing.find()
    res.render('things/index', {
        errorMsg: '',
        things: allThings
    })
}

function create(req, res) {
    try {
        Thing.create(req.body)
        res.redirect('/things')
    }
    catch (err) {
        console.log(err)
    }
}