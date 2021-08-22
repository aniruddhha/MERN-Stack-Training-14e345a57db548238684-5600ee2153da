const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path')

const profilePicDir = 'pics'

const router = express.Router();

router.post('/pic', fileUpload(), function (req, res, next) {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.json({ sts: 'fail', msg: 'No files were uploaded' })
    }

    console.log(req.body)

    const pic = req.files.pic
    const dirPath = path.join(__dirname, profilePicDir, `${pic.name}`)
    console.log(dirPath)
    pic.mv(dirPath, err => {
        if (err) {
            res.status(500).json({ sts: 'fail', msg: 'problem in saving file' })
        }
        res.status(201).json({ sts: 'success', 'msg': 'file uploaded successfully' })
    })
});

module.exports = router;