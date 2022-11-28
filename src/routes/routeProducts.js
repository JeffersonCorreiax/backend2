const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get('/products', productsController.index);
router.post('/products', productsController.create);


module.exports = router;