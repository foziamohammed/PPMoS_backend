const Milestone = require("../models/milestone");

const addMilestone = async (req, res) => {
  const { edit, id } = req.query;
  console.log(edit, id);
  try {
    const { title, stage, description, requirement, dueDate, status } =
      req.body;
    const milestone =
      edit === "true"
        ? await Milestone.findOneAndUpdate(
            { _id: id },
            { title, stage, description, requirement, dueDate, status },
            { new: true, runValidators: true }
          )
        : await Milestone.create({
            studentId: id,
            stage,
            requirement,
            title,
            description,
            dueDate,
            status,
          });
    res.status(201).json({ milestone });
  } catch (error) {
    console.error("Error adding milestone:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

const getMilestone = async (req, res) => {
  try {
    const milestone = await Milestone.findOne({ studentId: req.user.id });
    if (!milestone) {
      return res.status(404).json({ message: "Milestone not found" });
    }
    res.status(200).json({ milestone });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const getMilestoneById = async (req, res) => {
  const { id } = req.params;
  req.user.id = id;

  try {
    const milestone = await Milestone.findOne({ studentId: req.user.id });
    if (!milestone) {
      return res.status(404).json({ message: "Milestone not found" });
    }
    res.status(200).json({ milestone });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const updateMilestone = async (req, res) => {
  try {
    const { title, stage, description, requirement, dueDate, status } =
      req.body;
    const milestone = await Milestone.findOneAndUpdate(
      { studentId: req.user.id },
      { title, stage, description, requirement, dueDate, status },
      { new: true, runValidators: true }
    );
    if (!milestone) {
      return res.status(404).json({ message: "Milestone not found" });
    }
    res.status(200).json({ milestone });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const updateMilestoneStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const milestone = await Milestone.findOneAndUpdate(
      { studentId: req.user.id },
      { status },
      { new: true, runValidators: true }
    );
    if (!milestone) {
      return res.status(404).json({ message: "Milestone not found" });
    }
    res.status(200).json({ milestone });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const editMilestone = async (req, res) => {
  const { id } = req.params;

  try {
    const { title, stage, description, requirement, dueDate, status } =
      req.body;
    const milestone = await Milestone.findOneAndUpdate(
      { _id: id },
      { title, stage, description, requirement, dueDate, status },
      { new: true, runValidators: true }
    );

    res.status(201).json({ milestone });
  } catch (error) {
    console.error("Error adding milestone:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = {
  addMilestone,
  getMilestone,
  getMilestoneById,
  updateMilestone,
  updateMilestoneStatus,
};
