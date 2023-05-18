const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		text: {
			type: String,
		},
		backgroundColor: {
			type: String,
		},
		src: {
			type: String,
		},
		type: {
			type: String,
		},
		seen: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Users",
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Story" }
);

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;
