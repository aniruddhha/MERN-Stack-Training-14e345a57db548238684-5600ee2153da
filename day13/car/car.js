const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({ sts: 'checking', 'msg': 'Car API Get Method' })
});

module.exports = router;