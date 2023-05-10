const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessagesSchema = new Schema(
	{
		sender: {
			type: String,
			required: true,
		},
		receiver: {
			type: String,
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
