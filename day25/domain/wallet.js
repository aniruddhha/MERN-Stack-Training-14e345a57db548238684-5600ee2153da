
module.exports = function (mongoose) {
    return {
        build: () => {
            console.log(`Building Wallet Schema`)
            const walletSchema = new mongoose.Schema({
                _id: String,
                owner: String,
                balance: Number,
                lastUpdate: Date
            })

            const Wallet = mongoose.model('Wallet', walletSchema)
            console.log(Wallet)

            // const wl = new Wallet({ _id: 'djfjjksfdh', owner: 'fdsfsfd', balance: 878, lastUpdate: new Date() })
            // wl.save()

            return Wallet
        }
    }
}