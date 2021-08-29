const express = require('express');
const Bill = require('../domain/billing.domain');
const BillingRepository = require('../repository/billing.repo');
const router = express.Router();

module.exports = function (mysqlConfig) {

    const repository = new BillingRepository(mysqlConfig.connection)

    router.get('/', function (req, res, next) {
        repository.findBills((err, results, fields) => {
            if (!err) {
                res.json({
                    sts: 'success',
                    msg: 'fetching bills',
                    dt: results
                })
            } else {
                res.json({
                    sts: 'fail',
                    msg: 'db problem : error in fetching bill',
                    dt: [err]
                })
            }
        })
    });

    router.post('/', (req, res) => {
        repository.createBill(
            new Bill(
                req.body.id,
                req.body.cust,
                req.body.amt,
                req.body.dt
            ),
            (err, results, fields) => {
                if (!err) {
                    res.json({
                        sts: 'success',
                        msg: 'saving bill',
                    })
                } else {
                    res.json({
                        sts: 'fail',
                        msg: 'db problem : error in saving data',
                        dt: [err]
                    })
                }
            }
        )
    })

    return router
}