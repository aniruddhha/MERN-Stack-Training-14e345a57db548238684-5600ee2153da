const express = require('express');
const router = express.Router();

router.post('/', function (req, res, next) {
    const usNm = req.body.usNm
    const pass = req.body.pass

    console.log(req.body)

    if (usNm == 'and' && pass == 'and') res.json({ sts: 'success', msg: 'Allowed to perform operation' })
    else res.json({ sts: 'fail', msg: 'Unauthrozied to perform operation' })
});

module.exports.router = router;
module.exports.authMiddleware = (req, res, next) => {
    const usNm = req.body.usNm
    const pass = req.body.pass
    if (usNm == 'and' && pass == 'and') next()
    else res.json({ sts: 'fail', msg: 'Unauthrozied to perform operation' })
}