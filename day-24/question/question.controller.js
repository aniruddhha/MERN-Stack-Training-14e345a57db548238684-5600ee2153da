module.exports = function (express, db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.json({ sts: 'connected' })
    })

    return router
}