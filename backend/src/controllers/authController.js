const signIn = require("../utils/signin");

const login = async (req, res) => {
  const { role, username, password } = req.body;

  try {
    const token = await signIn(role, username, password);

    if (token) {
      res.status(200).json({
        message: "Login successful!",
        token: token,
      });
    } else {
      res.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { login };
