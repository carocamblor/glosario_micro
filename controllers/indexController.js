const glosario = require('../data/glosario');

var indexController = {
    index: (req, res) => {
        res.render('index', {glosario})
    },
    results: (req, res) => {
        let results = glosario.filter((title) => title.toLowerCase().includes(req.query.search.toLowerCase()))
    },
}

module.exports = indexController;