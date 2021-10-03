
const mongoose = require('mongoose')
const wallet = require('../domain/wallet')(mongoose)

module.exports = {
    connect: async () => {
        const db = await mongoose.connect('mongodb://localhost:27017/wallet');
        return db
    },
    initSchema: () => {
        return {
            Wallet: wallet.build()
        }
    }
}
