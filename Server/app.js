const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const productRoutes = require("./routes/productRoutes");
// const userRoutes = require("./routes/userRoutes");
// const messageRoutes = require("./routes/messageRoutes");
// const videoRoutes = require("./routes/videoRoutes");
// const chatSockets = require("./sockets/chat");

const app = express();

// Enable cross-origin resource sharing (CORS)
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Connect to MongoDB database

// Define API endpoints
// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/videos", videoRoutes);

// Start the server and listen for incoming connections
const server = app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
mongoose
	.connect(
		"mongodb+srv://user1:0939449102@cluster0.1n7kp.mongodb.net/?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// Initialize Socket.IO
// chatSockets.initialize(server);
