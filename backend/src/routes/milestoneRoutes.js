const express = require('express');
const router = express.Router();
const {  verifyToken } = require("../middlewares/authMiddleware")
const { addMilestone, getMilestones, updateMilestone } = require('../controllers/milestoneController');

router.post('/add', verifyToken, addMilestone);
router.get('/get', verifyToken, getMilestones);
router.put('/update/:id', verifyToken, updateMilestone);

module.exports = router;