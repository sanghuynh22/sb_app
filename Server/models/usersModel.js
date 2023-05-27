const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
		},
		friends: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Users",
			},
		],
		friendRequest: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Users",
			},
		],
		friendReceiveRequest: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Users",
			},
		],
		avatar: {
			type: String,
		},
		stories: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Story",
			},
		],
		statusHide: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Status",
			},
		],
		socketId: {
			type: String,
		},
		online: {
			type: Boolean,
			default: false,
		},
		timeOff: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Users" }
);

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
