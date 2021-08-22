const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    employees: [
      { name: 'emp1' },
      { name: 'emp2' },
      { name: 'emp3' },
    ]
  })
});

module.exports = router;
