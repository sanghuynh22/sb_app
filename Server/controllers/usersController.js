const Users = require("../models/usersModel");
const Story = require("../models/storysModel");
const mongoose = require("mongoose");
exports.getAllUsers = async (req, res) => {
	try {
		const users = await Users.find().populate(["stories", "friends"]);
		const now = new Date();

		for (let i = 0; i < users.length; i++) {
			const user = users[i];
			const stories = user.stories || [];

			for (let j = 0; j < stories.length; j++) {
				const story = stories[j];
				const createdAt = new Date(story.createdAt);
				const diffInMs = now - createdAt;
				const diffInHours = diffInMs / (1000 * 60 * 60);

				if (diffInHours >= 24) {
					user.stories.pull(story._id);
					await user.save();
					await Story.deleteOne({ _id: story._id });
				}
			}
		}

		const updatedUsers = await Users.find().populate(["stories", "friends"]);
		res.status(200).json(updatedUsers);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: "Internal server error" });
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
		const requestUser = await Users.findByIdAndUpdate(userRequest, {
			$push: { friendRequest: userReceive },
		});
		const receiveUser = await Users.findByIdAndUpdate(userReceive, {
			$push: { friendReceiveRequest: userRequest },
		});
		if (!requestUser || !receiveUser) {
			console.log("requestUser, req.body", requestUser, req.body);
			return res.status(404).json("Users not found");
		}
		res.status(200).json("Request sent successfully!");
	} catch (error) {
		res.status(500).json(error.message);
	}
};
exports.deleteFriend = async (req, res) => {
	const { userId, friendId } = req.body;
	try {
		const user = await Users.findById(userId);
		const friend = await Users.findById(friendId);

		if (!user || !friend) {
			return res.status(404).json("Không tìm thấy người dùng");
		}

		const updatedFriends = user.friends.filter(
			(friendId) => friendId.toString() !== friend._id.toString()
		);

		const updatedUser = await Users.findByIdAndUpdate(
			userId,
			{ $set: { friends: updatedFriends } },
			{ new: true }
		);

		const updatedFriend = await Users.findByIdAndUpdate(
			friendId,
			{ $pull: { friends: userId } },
			{ new: true }
		);

		res.status(200).json({ updatedUser, updatedFriend });
	} catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
};

exports.acceptFriendRequest = async (req, res) => {
	const { userId, friendId } = req.body;
	try {
		const friendUser = await Users.findById(friendId);
		const userAccept = await Users.findById(userId);
		if (!friendUser) return res.status(404).json("Không tìm thấy người dùng");
		if (!userAccept) return res.status(404).json("Không tìm thấy người dùng");

		const updatedRequests = friendUser.friendRequest.filter(
			(request) => request.toString() !== userId
		);

		const updatedFriends = [...friendUser.friends, userId];

		const updatedFriend = await Users.findByIdAndUpdate(
			friendId,
			{ $set: { friendRequest: updatedRequests, friends: updatedFriends } },
			{ new: true }
		);

		const updatedReceive = userAccept.friendReceiveRequest.filter(
			(request) => request.toString() !== friendId
		);

		const updateduserAccept = await Users.findByIdAndUpdate(
			userId,
			{
				$set: {
					friendReceiveRequest: updatedReceive,
					friends: [...userAccept.friends, friendId],
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
	const { userId, friendUserId } = req.body;
	try {
		const friendUser = await Users.findById(friendUserId);

		if (!friendUser) {
			return res.status(404).json("Không tìm thấy người dùng");
		}

		const updatedRequests = friendUser.friendRequest.filter(
			(requestUserId) => requestUserId !== userId
		);
		const updatedFriendReceiveRequest = friendUser.friendReceiveRequest.filter(
			(receiveUserId) => receiveUserId.toString() !== userId.toString()
		);

		const updatedFriend = await Users.findByIdAndUpdate(
			friendUserId,
			{
				$set: {
					friendRequest: updatedRequests,
					friendReceiveRequest: updatedFriendReceiveRequest,
				},
			},
			{ new: true }
		);

		const currentUser = await Users.findById(userId);
		if (!currentUser) {
			return res.status(404).json("Không tìm thấy người dùng");
		}

		const updatedCurrentUserReceive = currentUser.friendReceiveRequest.filter(
			(requestId) => requestId !== friendUserId
		);
		const updatedCurrentUserRequest = currentUser.friendRequest.filter(
			(receiveId) => receiveId.toString() !== friendUserId.toString()
		);
		const updatedCurrentUser = await Users.findByIdAndUpdate(
			userId,
			{
				$set: {
					friendReceiveRequest: updatedCurrentUserReceive,
					friendRequest: updatedCurrentUserRequest,
				},
			},
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
		const { userId, avatar } = req.body;

		const user = await Users.findByIdAndUpdate(
			userId,
			{
				$set: {
					avatar,
				},
			},
			{ new: true }
		);

		if (!user) {
			return res.status(404).json({ error: "Người dùng không tồn tại" });
		}

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
