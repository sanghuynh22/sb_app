const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");

router.get("/", messagesController.getAllMessagesOfTwo);
router.post("/", messagesController.createMessage);

module.exports = router;
