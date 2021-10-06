var express = require('express');
const { getQuran, getSurah } = require('../controllers/indexControllers');
var router = express.Router();

/* GET home page. */
router.get('/', getQuran);

router.get('/:surahNumber', getSurah);


module.exports = router;
