const Bill = require("../domain/billing.domain")

class BillingRepository {

    createBill() {
        const bill = new Bill()
    }

    findBills() {
        const bills = []
        bills.push(new Bill(231, 'abc', 1000, new Date()))
        bills.push(new Bill(231, 'pqr', 4590, new Date()))
        bills.push(new Bill(231, 'xyz', 456, new Date()))

        return bills;
    }

    findBillById() {

    }

    findBillingCustomer() {

    }
}

module.exports = BillingRepository