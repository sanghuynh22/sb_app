const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema(
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		name: { type: String, required: true },
		members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
		createdAt: { type: Date, default: Date.now },
	},
	{ collection: "Group" }
);

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
