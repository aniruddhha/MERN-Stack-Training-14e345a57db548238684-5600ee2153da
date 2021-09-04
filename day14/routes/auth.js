const express = require('express');
const basicAuth = require('express-basic-auth');

const jwt = require('jsonwebtoken');

const fs = require('fs');
// const privateKey = fs.readFileSync('./jwtRS256.key');
// console.log(privateKey.toString('utf-8'))

const router = express.Router();

const dbUsers = [
    { id: 100, usNm: 'android', pass: 'android' },
    { id: 101, usNm: 'ani', pass: 'ani' },
]
const users = {
    'android': 'android',
    'ani': 'ani',
    'hi': 'hi'
}

router.post('/login', basicAuth({
    users
}), (req, res) => {

    const { user } = req.auth;
    const dbUser = dbUsers.find(us => us.usNm == user)

    const token = jwt.sign({ user, data: 'some example data' }, 'aaaaa', { algorithm: 'HS256', expiresIn: 30 });

    // never pass password and user info in the response
    res.json({ token, user, dbUser })
});

module.exports = router;
