const Market = require("../models/marketModel");
const Bill = require("../models/billModel");
exports.getItems = async (req, res) => {
	try {
		const allMarket = await Market.find().populate("seller");
		res.json(allMarket);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Lỗi server");
	}
};
exports.getBought = async (req, res) => {
	const { idBuyer } = req.params;

	try {
		const bills = await Bill.find({ buyer: idBuyer }).populate("item");
		res.status(200).json(bills);
	} catch {
		console.error(error.message);
		res.status(500).json("Lỗi server");
	}
};
exports.createItem = async (req, res) => {
	try {
		const newItem = new Market(req.body);
		const result = await newItem.save();

		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
exports.buyItem = async (req, res) => {
	try {
		const quantity = req.body.amount;

		const item = await Market.findById(req.body.item);
		if (!item) {
			return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
		}
		if (item.amount < quantity) {
			return res.status(400).json({ message: "Sản phẩm không đủ số lượng" });
		}

		const boughtItem = new Bill({
			item: req.body.item,
			buyer: req.body.buyer,
			amount: quantity,
			price: item.price * quantity,
			status: 0,
		});
		const result = await boughtItem.save();
		item.amount -= quantity;
		await item.save();
		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
