const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const Message = require("./models/messagesModel");
const Users = require("./models/usersModel");
const socketio = require("socket.io");

const usersRoutes = require("./routes/usersRoutes");
const statusRoutes = require("./routes/statusRoutes");
const storyRoutes = require("./routes/storysRoutes");
const reelRoutes = require("./routes/reelsRoutes");
const commentRoutes = require("./routes/commentsRoutes");
const watchRoutes = require("./routes/watchRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const marketRoutes = require("./routes/marketRoutes");

const userSockets = {};
const app = express();
require("dotenv").config();

app.use(
	cors({
		origin: process.env.WEB_IP_ADDRESS || "http://localhost:3001",
		optionsSuccessStatus: 200,
	})
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use("/api/users", usersRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/story", storyRoutes);
app.use("/api/reel", reelRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/watch", watchRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/market", marketRoutes);

const server = app.listen(process.env.PORT || 3000, () => {
	console.log("Server listening on port 3000");
});
const io = socketio(server);

io.on("connection", (socket) => {
	let idUser = null;
	console.log(`Client ${socket.id} connected`);

	socket.on("login", async (userId) => {
		idUser = userId;
		userSockets[userId] = await socket.id;
		io.emit("getOnlineUsers", userSockets);

		console.log(`User ${userId} logged in as socketID: ${userSockets[userId]}`);
	});

	socket.on("sendMessage", async ({ userId, recipientId, message }) => {
		let infoMessage = {
			from: userId,
			to: recipientId,
			content: message,
			createdAt: new Date(),
		};
		const newMessage = new Message(infoMessage);
		newMessage.save();

		const recipientSocket = await userSockets[recipientId];
		if (recipientSocket) {
			io.to(recipientSocket).emit("getMessages", infoMessage);
		}
	});

	socket.on("user-disconnect", async () => {
		let keyDelete = await Object.keys(userSockets).find(
			(key) => userSockets[key] == socket.id
		);
		delete userSockets[keyDelete];
		io.emit("getOnlineUsers", userSockets);
	});
	socket.on("disconnect", async () => {
		let keyDelete = await Object.keys(userSockets).find(
			(key) => userSockets[key] == socket.id
		);
		delete userSockets[keyDelete];
		io.emit("getOnlineUsers", userSockets);

		// await Users.findByIdAndUpdate(
		// 	idUser,
		// 	{ $set: { online: false, timeOff: new Date() } },
		// 	{ new: true }
		// )
		// 	.then((user) => {
		// 		io.emit("disconnectSuccess");

		// 		console.log(`${user?.username} đã ngắt kết nối vào ${user?.timeOff}`);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	});
});

mongoose
	.connect(process.env.MONGODB_ADDRESS, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));
