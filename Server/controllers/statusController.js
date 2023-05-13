const Status = require("../models/statusModel");

exports.readAllStatus = async (req, res) => {
	try {
		const allStatus = await Status.find()
			.populate("user")
			.populate({
				path: "comments",
				populate: {
					path: "user",
					select: "-password", // Loại bỏ trường password của user
				},
			})
			.sort({ createdAt: -1 });
		res.json(allStatus);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Lỗi server");
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
		const { statusId } = await req.params;
		console.log("statusId = ", statusId);

		const status = await Status.findById(statusId).populate("user");

		if (!status) {
			return res.status(404).json({ message: "Trạng thái không tồn tại" });
		}

		await Status.findByIdAndDelete(statusId);

		res.status(200).json(status);
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

		const { userId } = req.body;

		const index = status.likes.indexOf(userId);

		if (index !== -1) {
			// Nếu người dùng đã like thì xóa người dùng khỏi mảng likes
			status.likes.splice(index, 1);
		} else {
			// Ngược lại, thêm người dùng vào mảng likes
			status.likes.push(userId);
		}

		await status.save();

		res.json(status);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Lỗi server " });
	}
};
