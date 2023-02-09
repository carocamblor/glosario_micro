const glosario = require('../data/glosario');

var indexController = {
    index: (req, res) => {
        res.render('index', {glosario})
    },
    results: (req, res) => {
        let results = glosario.filter((item) => item.title.toLowerCase().includes(req.query.search.toLowerCase()))
        res.render('results', {results, search: req.query.search})
    },
}

module.exports = indexController;