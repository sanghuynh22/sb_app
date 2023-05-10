const Status = require("../models/statusModel");

exports.readAllStatus = async (req, res) => {
	try {
		const allStatus = await Status.find();
		res.json(allStatus);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Lỗi server");
	}
};
exports.createStatus = async (req, res) => {
	try {
		const newStatus = new Status(req.body);
		const result = await newStatus.save();
		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};

// can params
exports.deleteStatus = async (req, res) => {
	try {
		const statusId = req.params.id;
		const userId = req.body.userId;

		const status = await Status.findById(statusId).populate("user");

		if (!status) {
			return res.status(404).json({ message: "Trạng thái không tồn tại" });
		}

		if (status.user._id.toString() !== userId) {
			return res
				.status(401)
				.json({ message: "Bạn không có quyền xóa bài viết này" });
		}

		await status.remove();

		res.json({ message: "Đã xóa trạng thái thành công" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Lỗi server khi xóa trạng thái" });
	}
};

exports.updateStatus = async (req, res) => {
	try {
		const statusId = req.params.id;
		const { userId, ...updateValue } = req.body;

		let status = await Status.findById(statusId).populate("user");

		if (!status) {
			return res.status(404).json({ error: "status này không tồn tại!" });
		}
		if (status.user._id.toString() !== userId) {
			return res
				.status(401)
				.json({ message: "Bạn không có quyền xóa bài viết này" });
		}
		status.set({ updated: new Date() });
		status.set(updateValue);
		status = await status.save();

		return res.status(200).json(status);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Lỗi server khi xóa trạng thái" });
	}
};
exports.likeStatus = async (req, res) => {
	try {
		const { id } = req.params;
		const status = await Status.findById(id);

		if (!status) {
			return res.status(404).json({ msg: "Status không tồn tại" });
		}

		const { username } = req.body;

		if (status.likes.includes(username)) {
			return res.status(400).json({ msg: "Bạn đã thích trạng thái này rồi" });
		}

		status.likes.push(username);

		await status.save();

		res.json(status);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Lỗi server " });
	}
};
