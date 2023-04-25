var express = require('express');
const SaleController = require('../controllers/SaleController');
var router = express.Router();

/* GET home page. */
router.get('/', SaleController.home);

router.get('/sale', SaleController.index);

router.get('/sale/add', SaleController.addSale);

router.get('/lending/add', SaleController.lending);

module.exports = router;
