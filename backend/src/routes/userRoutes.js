const express = require('express');
const router = express.Router();
const { updateUser, getUser } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.put('/update', verifyToken, updateUser);
router.get('/get', verifyToken, getUser);

module.exports = router;