const express= require('express');
const router = express.Router();
const {signup,login,getById,getAlluser}= require('../controller/userController');
const {isAuthenticatedUser}= require('../middleware/auth');
router.post('/signup', signup);
router.post('/login',login)



router.get('/profile', isAuthenticatedUser, (req, res) => {
    const userName = req.user.name;
    res.status(200).json({ name: userName });
  });


//router for get user by id
router.get('/:id',getById);

//router for get all users
router.get('/users',getAlluser);

  module.exports = router;