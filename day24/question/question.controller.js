module.exports = function (express, db) {
    const router = express.Router();
    const questions = db.collection('questions')

    router.get('/', async (req, res) => {
        const dbRes = await questions.find({}).toArray()
        res.json(dbRes)
    })

    router.post('/', async (req, res) => {
        const question = req.body
        const dbRes = await questions.insertOne({ ...question })
        res.json({ sts: `success`, msg: `saved question successfully`, ...dbRes })
    })
    return router
}