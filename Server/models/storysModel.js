const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		seens: {
			type: [String],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Story" }
);

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;
