const Users = require("../models/usersModel");

exports.getAllUsers = async (req, res) => {
	try {
		const user = await Users.find().populate("friends");
		res.status(201).json(user);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
exports.getUser = async (req, res) => {
	const userId = req.params.id;
	try {
		const user = await Users.findById(userId).populate("friends");
		res.status(201).json(user);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};
exports.registerUser = async (req, res) => {
	try {
		const { username } = req.body;
		const existingUser = await Users.findOne({ username });

		if (existingUser) {
			return res.status(400).json("Username đã có người dùng rồi");
		}

		const newUser = new Users(req.body);
		const result = await newUser.save();
		res.status(201).json(result);
	} catch (err) {
		console.log(err);
		res.status(404).json(err);
	}
};

exports.loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await Users.findOne({ username, password });
		if (!user) return res.status(404).json("User not found");
		res.status(202).json(user);
	} catch (err) {
		console.log(err);
		res.status(505).json(err);
	}
};

exports.addFriend = async (req, res) => {
	const { userRequest, userReceive } = req.body;
	try {
		const requestUser = await Users.findOneAndUpdate(
			{ username: userRequest },
			{
				$push: { friendRequest: userReceive },
			}
		);
		const receiveUser = await Users.findOneAndUpdate(
			{ username: userReceive },
			{
				$push: { friendReceiveRequest: userRequest },
			}
		);
		if (!requestUser || !userReceive) {
			console.log("requestUser, req.body", requestUser, req.body);
			return res.status(404).json("Users not found");
		}
		res.status(200).json("requesting friend success!");
	} catch (error) {
		res.status(500).json(error.message);
	}
};

exports.acceptFriendRequest = async (req, res) => {
	const { username, friendUsername } = req.body;
	try {
		const friendUser = await Users.findOne({ username: friendUsername });
		const userAccept = await Users.findOne({ username: username });
		if (!friendUser) return res.status(404).json("Không tìm thấy người dùng");
		if (!userAccept) return res.status(404).json("Không tìm thấy người dùng");

		const updatedRequests = friendUser.friendRequest.filter(
			(request) => request !== username
		);

		const updatedFriends = [...friendUser.friends, userAccept._id];

		const updatedFriend = await Users.findOneAndUpdate(
			{ username: friendUsername },
			{ $set: { friendRequest: updatedRequests, friends: updatedFriends } },
			{ new: true }
		);

		const updatedReceive = userAccept.friendReceiveRequest.filter(
			(request) => request !== friendUsername
		);

		const updateduserAccept = await Users.findOneAndUpdate(
			{ username },
			{
				$set: {
					friendReceiveRequest: updatedReceive,
					friends: [...userAccept.friends, friendUser._id],
				},
			},
			{ new: true }
		);

		res.status(200).json({ updatedFriend, updateduserAccept });
	} catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
};
exports.denyFriendRequest = async (req, res) => {
	const { username, friendUsername } = req.body;
	try {
		const friendUser = await Users.findOne({ username: friendUsername });
		if (!friendUser) return res.status(404).json("Không tìm thấy người dùng");

		const updatedRequests = friendUser.friendRequest.filter(
			(request) => request !== username
		);

		const updatedFriends = [...friendUser.friends, username];

		const updatedFriend = await Users.findOneAndUpdate(
			{ username: friendUsername },
			{ $set: { friendRequest: updatedRequests } },
			{ new: true }
		);

		const currentUser = await Users.findOne({ username });
		if (!currentUser) return res.status(404).json("Không tìm thấy người dùng");

		const updatedReceive = friendUser.friendReceiveRequest.filter(
			(request) => request !== friendUsername
		);

		const updatedCurrentUser = await Users.findOneAndUpdate(
			{ username },
			{ $set: { friendReceiveRequest: updatedReceive } },
			{ new: true }
		);

		res.status(200).json({ updatedFriend, updatedCurrentUser });
	} catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
};
exports.updateUser = async (req, res) => {
	try {
		const { username } = req.body;

		let user = await Users.findOne({ username });

		if (!user) {
			return res.status(404).json({ error: "Người dùng không tồn tại" });
		}

		user.set(req.body);
		user = await user.save();

		return res.json(user);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Lỗi máy chủ" });
	}
};
exports.hideStatus = async (req, res) => {
	const { userId, statusId } = await req.body;

	try {
		const user = await Users.findById(userId);
		if (!user) {
			return res.status(404).json({ message: "Không tìm thấy người dùng" });
		}

		user.statusHide.push(statusId);
		await user.save();
		console.log("iduser : ", user._id.toString());

		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Đã xảy ra lỗi server" });
	}
};

exports.deleteUserByUsername = async (req, res) => {
	const { userId } = req.body;
	try {
		const user = await Users.findOneAndDelete({ userId });
		if (!user) res.status(404).json({ message: "người dùng không có" });
		console.log("user ", user);

		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Đã xảy ra lỗi trong quá trình" });
	}
};
