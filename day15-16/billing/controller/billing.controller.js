const express = require('express');
const BillingRepository = require('../repository/billing.repo');
const router = express.Router();

const repository = new BillingRepository()

router.get('/', function (req, res, next) {
    res.json({
        sts: 'success',
        msg: 'fetching bills',
        dt: repository.findBills()
    })
});

module.exports = router;