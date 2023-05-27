const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema(
	{
		buyer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		item: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Market",
			required: true,
		},
		amount: {
			type: Number,
		},
		price: {
			type: Number,
		},
		status: {
			type: Number,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Bill" }
);

const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;
