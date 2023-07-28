const express= require('express');
const router = express.Router();
const {signup,login}= require('../controller/userController');

router.post('/signup', signup);
router.get('/login',login)

module.exports = router;