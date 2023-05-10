const express = require("express");
const router = express.Router();
const storyController = require("../controllers/storyController");

router.get("/", storyController.getAllStory);
router.get("/:userId", storyController.getStoryOfUser);
router.post("/", storyController.createStory);
router.delete("/:id", storyController.deleteAStory);

module.exports = router;
