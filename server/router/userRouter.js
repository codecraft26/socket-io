const express= require('express');
const router = express.Router();
const {signup,login}= require('../controller/userController');
const {isAuthenticatedUser}= require('../middleware/auth');
router.post('/signup', signup);
router.get('/login',login)



router.get('/profile', isAuthenticatedUser, (req, res) => {
    const userName = req.user.name;
    res.status(200).json({ name: userName });
  });
module.exports = router;