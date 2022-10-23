const express = require('express');


//? Global variables
const router = express.Router()


//? Routes
router.get('/', (req, res) => {
    res.send('Home');
})


module.exports = router