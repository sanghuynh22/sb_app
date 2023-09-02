const Message = require("../models/messagesModel");

exports.getAllMessagesOfTwo = async (req, res) => {
	try {
		const { userId, receiverId } = req.body;
		console.log("userId::", userId);
		console.log("receiverId::", receiverId);
		const messages = await Message.find({
			$or: [
				{ from: userId, to: receiverId },
				{ from: receiverId, to: userId },
			],
		}).sort({ createdAt: -1 });
		res.status(201).json(messages);
	} catch (e) {
		console.log(e);
	}
};
exports.createMessage = async (req, res) => {
	try {
		const message = new Message(req.body);
		await message.save();
		res.status(201).json(message);
	} catch (err) {
		res.status(500).json(err);
	}
};
