
class BillingRepository {

    constructor(conn) {
        this.connection = conn
    }
    createBill(bill, cb) {
        this.connection.query(` insert into bill values(${bill.id}, '${bill.cust}', ${bill.amt} ,'${bill.dt}')`, cb)
    }

    findBills(cb) {
        this.connection.query(`select * from bill`, cb)
    }

    findBillById() {

    }

    findBillingCustomer() {

    }
}

module.exports = BillingRepository