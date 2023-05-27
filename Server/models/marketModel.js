const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarketSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		seller: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Users",
			required: true,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
		},
		tag: {
			type: String,
		},
		amount: {
			type: Number,
		},
		price: {
			type: Number,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "Market" }
);

const Market = mongoose.model("Market", MarketSchema);

module.exports = Market;
