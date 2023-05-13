const Reel = require("../models/reelsModel");

exports.getAllReel = async (req, res) => {
	try {
		const allReel = await Reel.find();
		res.json(allReel);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Lỗi server");
	}
};
exports.createReel = async (req, res) => {
	try {
		const newReel = new Reel(req.body);
		const result = await newReel.save();
		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};

exports.getReelOfUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const reels = await Reel.find({
			user: userId,
		});
		res.json(reels);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
exports.deleteAReelByOwner = async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;

	try {
		const reel = await Reel.findOne({ _id: id });
		if (!reel) {
			return res.status(404).json({ message: "reel not found" });
		}
		if (String(reel.user) !== String(userId)) {
			return res
				.status(401)
				.json({ message: "You are not authorized to delete this reel" });
		}

		await Reel.deleteOne({ _id: id });
		res.status(200).json({ message: "reel deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
