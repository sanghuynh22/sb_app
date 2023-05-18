const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const productRoutes = require("./routes/productRoutes");
const usersRoutes = require("./routes/usersRoutes");
const statusRoutes = require("./routes/statusRoutes");
const storyRoutes = require("./routes/storysRoutes");
const reelRoutes = require("./routes/reelsRoutes");
const commentRoutes = require("./routes/commentsRoutes");
const watchRoutes = require("./routes/watchRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const groupRoutes = require("./routes/groupsRoutes");
// const chatSockets = require("./sockets/chat");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
// Connect to MongoDB database

// Define API endpoints
app.use("/api/users", usersRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/story", storyRoutes);
app.use("/api/reel", reelRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/watch", watchRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/group", groupRoutes);

// Start the server and listen for incoming connections
const server = app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
mongoose
	.connect(
		"mongodb+srv://user1:0939449102@cluster0.1n7kp.mongodb.net/facebook_app?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));
