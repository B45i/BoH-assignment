const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
    return res.json({ msg: 'login Works' });
});

router.post('/register', (req, res) => {
    const { name, email, password, passwordRepeat } = req.body;
    return res.json({ name, email, password, passwordRepeat });
});

module.exports = router;