

module.exports = {
    home: (req, res) => {
        res.render('index', { css:[]})
    },

    index: (req, res) => {
        res.render('sale', {css: ['sale.css']});
    },

    addSale: (req, res) => {
        res.render('saleAdd', {css: ['saleAdd.css']});
    },

    lending: (req, res) => {
        res.render('lending', {css: ['saleAdd.css']})
    }
}