const express = require('express');
const router = express.Router();
const {  verifyToken } = require("../middlewares/authMiddleware")
const { addMilestone, getMilestones } = require('../controllers/milestoneController');

router.post('/add', verifyToken, addMilestone);
router.get('/get', verifyToken, getMilestones);

module.exports = router;