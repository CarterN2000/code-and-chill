const Thing = require('../models/thing')

module.exports = {
    new: newThing,
    index,
    create,
    show,
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

async function show(req, res) {
    try {
        const thing = await Thing.findById(req.params.id)
        res.render('things/show', {
            thing
        })
    }
    catch(err) {
        console.log(err)
    }
}