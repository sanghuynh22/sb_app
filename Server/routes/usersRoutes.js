const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUser);
router.post("/", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.post("/add-friend", usersController.addFriend);
router.post("/delete-friend", usersController.deleteFriend);
router.post("/accept-friend-request", usersController.acceptFriendRequest);
router.post("/deny-friend-request", usersController.denyFriendRequest);
router.put("/hide-status", usersController.hideStatus);
router.put("/", usersController.updateUser);
router.delete("/", usersController.deleteUserByUsername);

module.exports = router;
