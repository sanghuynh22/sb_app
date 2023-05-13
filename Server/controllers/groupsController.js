const Group = require("../models/groupsModel");

exports.getGroupOfUser = async (req, res) => {
	try {
		const groups = await Group.find({ owner: req.params.userId });
		return res.status(200).json(groups);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};
exports.createGroup = async (req, res) => {
	try {
		const group = new Group(req.body);
		const savedGroup = await group.save();
		return res.status(201).json(savedGroup);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};
exports.updateGroup = async (req, res) => {
	try {
		const group = await Group.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!group) {
			return res.status(404).json({ message: "Group not found" });
		}
		return res.json(group);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};
exports.deleteGroup = async (req, res) => {
	try {
		const group = await Group.findById(req.params.id);
		if (!group) {
			return res.status(404).json({ message: "Group not found" });
		}
		if (group.owner !== req.body.userId) {
			return res.status(401).json({ message: "Unauthorized" });
		}
		await Group.findByIdAndDelete(req.params.id);
		return res.jsonStatus(204);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Internal server error" });
	}
};
