const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messagesController");

router.post("/", messagesController.getAllMessagesOfTwo);
router.post("/", messagesController.createMessage);

module.exports = router;
