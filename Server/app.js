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
// Connect to MongoDB database
// app.use((req, res, next) => {
// 	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
// 	next();
// });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Define API endpoints
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
		userSockets[userId] = socket.id;
		Users.findByIdAndUpdate(
			userId,
			{ $set: { online: true, timeOff: null } },
			{ new: true }
		)
			.then((user) => {
				// Gửi sự kiện loginSuccess cho client-side
				io.emit("loginSuccess");

				console.log(`${user.username} đã đăng nhập`);
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(`User ${userId} logged in ${userSockets[userId]}`);
	});

	socket.on("getMessages", async ({ userId, recipientId }) => {
		const messages = await Message.find({
			$or: [
				{ from: userId, to: recipientId },
				{ from: recipientId, to: userId },
			],
		});
		console.log("getMessage: ", messages);
		console.log("userSockets[userId] : ", userSockets[userId]);
		io.to(userSockets[userId]).emit("messageHistory", messages);
	});

	socket.on("sendMessage", async ({ userId, recipientId, message }) => {
		console.log("userId : ", userId);
		const newMessage = new Message({
			from: userId,
			to: recipientId,
			content: message,
		});
		await newMessage.save();
		console.log("newMessage: ", newMessage);
		io.to(userSockets[userId]).emit("messageReceive", newMessage);

		const recipientSocket = userSockets[recipientId];
		if (recipientSocket) {
			io.to(recipientSocket).emit("newMessage", newMessage);
		} else {
			// messageBuffer.push(newMessage);
		}
	});

	socket.on("user-disconnect", async () => {
		console.log(`Client ${socket.id} disconnected`);
		await Users.findByIdAndUpdate(
			idUser,
			{ $set: { online: false, timeOff: new Date() } },
			{ new: true }
		)
			.then((user) => {
				// Gửi sự kiện disconnectSuccess cho client-side
				io.emit("disconnectSuccess");

				console.log(`${user.username} đã ngắt kết nối vào ${user.timeOff}`);
			})
			.catch((err) => {
				console.log(err);
			});
	});
	socket.on("disconnect", async () => {
		console.log(`Client ${socket.id} disconnected`);
		await Users.findByIdAndUpdate(
			idUser,
			{ $set: { online: false, timeOff: new Date() } },
			{ new: true }
		)
			.then((user) => {
				// Gửi sự kiện disconnectSuccess cho client-side
				io.emit("disconnectSuccess");

				console.log(`${user?.username} đã ngắt kết nối vào ${user?.timeOff}`);
			})
			.catch((err) => {
				console.log(err);
			});
	});
});

mongoose
	.connect(process.env.MONGODB_ADDRESS, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));
