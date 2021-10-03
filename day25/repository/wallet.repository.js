
module.exports = function (Wallet) {
    console.log(Wallet)
    return {
        createWallet: async (wallet) => {
            console.log(wallet)
            const waDb = new Wallet(wallet)
            const dbRes = await waDb.save()
            console.log(dbRes)
            return dbRes
        },
        checkWalletBalance: async (id) => {

        },

        findAllWallets: async () => {
            const wallets = await Wallet.find()
            return wallets
        }
    }
}

