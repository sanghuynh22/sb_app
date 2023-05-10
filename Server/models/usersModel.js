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
		friendRequest: {
			type: [String],
		},
		friendReceiveRequest: {
			type: [String],
		},
		avatar: {
			type: String,
		},
		statusHide: {
			type: [String],
		},
	},
	{ collection: "Users" }
);

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
