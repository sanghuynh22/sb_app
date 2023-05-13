const mongoose = require("mongoose");

const StatusSchema = mongoose.Schema(
	{
		text: {
			type: String,
		},

		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		image: {
			type: String,
		},
		likes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Users",
			},
		],
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comments",
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updated: {
			type: Date,
		},
	},
	{ collection: "Status" }
);

const Status = mongoose.model("Status", StatusSchema);

module.exports = Status;
