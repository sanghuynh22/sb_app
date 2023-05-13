const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema(
	{
		content: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		updatedAt: {
			type: Date,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Comments" }
);

const Comment = mongoose.model("Comments", CommentsSchema);

module.exports = Comment;
