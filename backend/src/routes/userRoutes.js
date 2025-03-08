const express = require("express");
const router = express.Router();
const {
  updateUser,
  getUser,
  getUserById,
  getUsers,
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.put("/update", verifyToken, updateUser);
router.get("/gets", verifyToken, getUsers);
router.get("/get", verifyToken, getUser);
router.get("/get/:id", verifyToken, getUserById);

module.exports = router;
