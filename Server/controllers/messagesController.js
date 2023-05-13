const Message = require("../models/messagesModel");

exports.getAllMessagesOfTwo = async (req, res) => {
	try {
		const receiverId = req.params.receiverId;
		const { userId } = req.body;
		const messages = await Message.find({
			$and: [{ jsoner_id: userId }, { receiver_id: receiverId }],
		}).sort({ created_at: -1 });
		res.json({ messages });
	} catch (e) {
		console.log(e);
	}
};
exports.createMessage = async (req, res) => {
	try {
		const message = new Message(req.body);
		await message.save();
		res.json(message);
	} catch (err) {
		res.status(500).json(err);
	}
};
