const Story = require("../models/storysModel");
const Users = require("../models/usersModel");

exports.getAllStory = async (req, res) => {
	try {
		const allStory = await Story.find();
		res.json(allStory);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Lỗi server");
	}
};
exports.createStory = async (req, res) => {
	try {
		const newStory = new Story(req.body);
		const savedStory = await newStory.save();
		const userId = req.body.user.toString();
		const updatedUser = await Users.findByIdAndUpdate(
			userId,
			{ $push: { stories: savedStory._id } },
			{ new: true }
		);
		res.status(201).json(savedStory);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};

exports.getStoryOfUser = async (req, res) => {
	try {
		const { userId } = req.params;
		const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
		const stories = await Story.find({
			user: userId,
			createdAt: {
				$gte: twentyFourHoursAgo,
			},
		});
		res.json(stories);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
exports.deleteAStory = async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;

	try {
		const story = await Story.findOne({ _id: id });
		if (!story) {
			return res.status(404).json({ message: "Story not found" });
		}
		if (String(story.user) !== String(userId)) {
			return res
				.status(401)
				.json({ message: "You are not authorized to delete this story" });
		}

		await Story.deleteOne({ _id: id });
		res.status(200).json({ message: "Story deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
