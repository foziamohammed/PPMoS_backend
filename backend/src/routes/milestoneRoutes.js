const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authMiddleware");
const {
  addMilestone,
  getMilestone,
  getMilestoneById,
  updateMilestone,
} = require("../controllers/milestoneController");

router.post("/add", verifyToken, addMilestone);
router.get("/get", verifyToken, getMilestone);
router.get("/get/:id", verifyToken, getMilestoneById);
router.put("/update", verifyToken, updateMilestone);

module.exports = router;
