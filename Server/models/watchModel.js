const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchSchema = new Schema(
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
		file: {
			type: String,
			required: true,
		},
		view: {
			type: Number,
		},
		likes: {
			type: Number,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Watch" }
);

const Watch = mongoose.model("Watch", WatchSchema);

module.exports = Watch;
