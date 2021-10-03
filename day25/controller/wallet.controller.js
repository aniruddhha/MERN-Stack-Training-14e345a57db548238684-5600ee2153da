module.exports = function (express, walletRepository) {
    const router = express.Router()

    router.post('/', (req, res) => {
        walletRepository.createWallet({
            _id: '82387qydsfjsdf',
            owner: 'abcabc',
            balance: 8998,
            lastUpdate: new Date()
        }).then(dbRes => res.json({ status: 'success', dbRes }))
            .catch(err => res.json({ status: 'error', err }))
    })

    return router
}