module.exports = (req, res, next) => {

    if (req.param.ip.includes('india')) {
        next()
    } else {
        res.send({ msg: 'ip not from the India' })
    }
}