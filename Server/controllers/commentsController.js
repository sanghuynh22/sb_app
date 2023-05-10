const Comment = require("../models/commentsModel");

exports.getAllComment = async (req, res) => {
	try {
		const allComment = await Comment.find();
		res.json(allComment);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Lỗi server");
	}
};
exports.updateComment = async (req, res) => {
	const { id } = req.params;
	const { userId, ...updateContent } = req.body;

	try {
		const comment = await Comment.findOne({ _id: id });
		if (!comment) {
			return res.status(404).json({ message: "comment not found" });
		}
		if (String(comment.user) !== String(userId)) {
			return res
				.status(401)
				.json({ message: "You are not authorized to delete this comment" });
		}

		comment.set(updateContent);
		await comment.save();
		res.status(200).json({ message: "Comment updated successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
exports.createComment = async (req, res) => {
	try {
		const newComment = new Comment(req.body);
		const result = await newComment.save();
		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};

exports.getCommenstOfLocation = async (req, res) => {
	try {
		const { locationId } = req.params;
		const comments = await Comment.find({
			location: locationId,
		});
		res.json(comments);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
exports.deleteACommentByOwner = async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;

	try {
		const comment = await Comment.findOne({ _id: id });
		if (!comment) {
			return res.status(404).json({ message: "comment not found" });
		}
		if (String(comment.user) !== String(userId)) {
			return res
				.status(401)
				.json({ message: "You are not authorized to delete this comment" });
		}

		await comment.deleteOne({ _id: id });
		res.status(200).json({ message: "Comment deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
