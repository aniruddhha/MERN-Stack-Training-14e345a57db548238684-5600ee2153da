const mysql = require('mysql');

class MySqlConfig {
    constructor() {
        console.log(`called`)
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'erp_db'
        });

        this.connection.connect(err => {
            if (err) throw new Error(`Unable to establish connection with db`)
        })
    }
}

module.exports = new MySqlConfig()