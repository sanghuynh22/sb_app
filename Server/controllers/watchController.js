const Watch = require("../models/watchModel");

exports.getAllWatch = async (req, res) => {
	try {
		const allWatch = await Watch.find().populate("user");
		res.json(allWatch);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Lỗi server");
	}
};
exports.createWatch = async (req, res) => {
	const file = req.file.filename;
	const title = req.body.title;
	const user = req.body.user;
	console.log("body : ", req.body);
	console.log("file : ", file);
	console.log("title : ", title);
	console.log("user : ", user);
	try {
		const newWatch = new Watch({
			file: file,
			title: title,
			user: user,
		});
		await newWatch.save();
		res.json({ message: "Upload successfully" });
	} catch {
		console.error(error.message);
		res.status(500).json("Lỗi server");
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
