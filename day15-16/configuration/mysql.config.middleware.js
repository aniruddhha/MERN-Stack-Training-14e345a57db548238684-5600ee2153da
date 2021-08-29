const mysql = require('mysql');

module.exports = (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
    });

    connection.connect(err => {
        if (err) {
            console.log(`Unable To Connect`)
            console.log(err)
            res.json({ sts: 'fail', msg: 'unable to connect db', err })
        }
        console.log(`Connection Successful`)
        req.dbCon = connection
        next()
    })
}