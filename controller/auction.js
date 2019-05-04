const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.json({ msg: 'Auction Works' }));

module.exports = router;