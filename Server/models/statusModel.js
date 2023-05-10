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
		likes: {
			type: Array,
		},
		date: {
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
