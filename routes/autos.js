const express = require('express');
const router = express.Router();

const autosController = require('../controller/autosController')

router.get('/', autosController.index)
router.get('/:marca', autosController.id);
router.get('/:marca/:dato', autosController.dato);

module.exports = router;
