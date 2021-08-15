const express = require('express');
const router = express.Router();

/* GET car listing. */
router.get('/', function (req, res, next) {
    res.json('getting car');
});

module.exports = router;