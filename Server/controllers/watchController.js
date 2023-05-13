const Watch = require("../models/watchModel");

exports.getAllWatch = async (req, res) => {
	try {
		const allWatch = await Watch.find();
		res.json(allWatch);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Lỗi server");
	}
};
exports.createWatch = async (req, res) => {
	try {
		const newWatch = new Watch(req.body);
		const result = await newWatch.save();
		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};

exports.getWatchOfUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const watches = await Watch.find({
			user: userId,
		});
		res.json(watches);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
exports.deleteAWatch = async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;

	try {
		const watch = await Watch.findOne({ _id: id });
		if (!watch) {
			return res.status(404).json({ message: "watch not found" });
		}
		if (String(watch.user) !== String(userId)) {
			return res
				.status(401)
				.json({ message: "You are not authorized to delete this watch" });
		}

		await Watch.deleteOne({ _id: id });
		res.status(200).json({ message: "watch deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
