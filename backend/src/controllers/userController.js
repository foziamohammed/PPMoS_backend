const axios = require("axios");

const updateUser = async (req, res) => {
  const { ...attributes } = req.body;
  const user = req.user;

  try {
    const response = await axios.put("http://localhost:9000/api/user/update", {
      attributes,
      user,
    });

    if (response.status === 200) {
      res.status(200).json({
        message: "Update successful!",
        data: response.data,
      });
    } else {
      res.status(400).json({ message: "Update failed" });
    }
  } catch (error) {
    console.error("Error during update:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
const getUser = async (req, res) => {
  const user = req.user;

  try {
    const response = await axios.post("http://localhost:9000/api/user/get", {
      user,
    });

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ message: "Failed to fetch user data" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  user.id = id;
  user.role = "student";

  try {
    const response = await axios.post("http://localhost:9000/api/user/get", {
      user,
    });

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ message: "Failed to fetch user data" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getUsers = async (req, res) => {
  const user = req.user;

  try {
    const response = await axios.post("http://localhost:9000/api/user/gets");

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ message: "Failed to fetch user data" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { updateUser, getUser, getUserById, getUsers };
