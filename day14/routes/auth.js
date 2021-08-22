const express = require('express');
const basicAuth = require('express-basic-auth');

const router = express.Router();

router.post('/login', basicAuth({
    users: { 'android': 'android' }
}), (req, res) => {
    res.json({ user: req.auth })
});

module.exports = router;
