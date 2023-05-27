const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessagesSchema = new Schema(
	{
		from: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		to: {
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
	{ collection: "Messages" }
);

const Message = mongoose.model("Messages", MessagesSchema);

module.exports = Message;
