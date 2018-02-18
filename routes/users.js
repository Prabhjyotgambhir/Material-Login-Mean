const express = require('express');
const router = express.Router();

// Register route
router.get('/register', (req,res,next)=> {
    res.send('Register');
});

// authenticate route
router.get('/authenticate', (req,res,next)=> {
    res.send('authenticate');
});

// profile route
router.get('/profile', (req,res,next)=> {
    res.send('profile');
});


module.exports = router;

