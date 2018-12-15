const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('TEST INDEX'));

module.exports = router;
