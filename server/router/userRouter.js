const express= require('express');
const router = express.Router();
const {signup,login,getById,getAlluser,profile}= require('../controller/userController');
const {isAuthenticatedUser}= require('../middleware/auth');
router.post('/signup', signup);
router.post('/login',login)



router.get('/profile', isAuthenticatedUser,profile);
router.get('/alluser', getAlluser);




  module.exports = router;