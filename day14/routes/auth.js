const express = require('express');
const basicAuth = require('express-basic-auth');

const jwt = require('jsonwebtoken');

const fs = require('fs');
// const privateKey = fs.readFileSync('./jwtRS256.key');
// console.log(privateKey.toString('utf-8'))

const router = express.Router();

router.post('/login', basicAuth({
    users: { 'android': 'android' }
}), (req, res) => {

    const { user } = req.auth;
    const token = jwt.sign({ user, data: 'some example data' }, 'aaaaa', { algorithm: 'HS256' });

    res.json({ token })
});

module.exports = router;
