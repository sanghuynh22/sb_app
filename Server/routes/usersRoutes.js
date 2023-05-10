const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/:id", usersController.getUser);
router.post("/", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.post("/add-friend", usersController.addFriend);
router.post("/accept-friend-request", usersController.acceptFriendRequest);
router.post("/deny-friend-request", usersController.denyFriendRequest);
router.post("/hide-status", usersController.hideStatus);
router.put("/", usersController.updateUser);
router.delete("/", usersController.deleteUserByUsername);

module.exports = router;
