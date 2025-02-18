const express = require('express');
const router = express.Router();
const {  verifyToken } = require("../middlewares/authMiddleware")
const { addMilestone, getMilestone, updateMilestone } = require('../controllers/milestoneController');

router.post('/add', verifyToken, addMilestone);
router.get('/get', verifyToken, getMilestone);
router.put('/update', verifyToken, updateMilestone);

module.exports = router;