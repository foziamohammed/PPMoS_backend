const Milestone = require("../models/milestone");

const addMilestone = async (req, res) => {
    try {
        const { title, description, requirement, dueDate, status } = req.body;
        const milestone = await Milestone.create({ studentId: req.user.id, requirement, title, description, dueDate, status });
        res.status(201).json({ milestone });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

const getMilestones = async (req, res) => {
    try {
        const milestones = await Milestone.find({ studentId: req.user.id });
        res.status(200).json({ milestones });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

const updateMilestone = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, requirement, dueDate, status } = req.body;
        const milestone = await Milestone.findOneAndUpdate(
            { _id: id, studentId: req.user.id },
            { title, description, requirement, dueDate, status },
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
        const { id } = req.params;
        const { status } = req.body;
        const milestone = await Milestone.findOneAndUpdate(
            { _id: id, studentId: req.user.id },
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

module.exports = { addMilestone, getMilestones, updateMilestone, updateMilestoneStatus };
