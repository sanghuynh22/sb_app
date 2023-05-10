const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReelSchema = new Schema(
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
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Reels" }
);

const Reel = mongoose.model("Reel", ReelSchema);

module.exports = Reel;
