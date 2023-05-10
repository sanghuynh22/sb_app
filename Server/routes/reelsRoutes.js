const express = require("express");
const router = express.Router();
const reelController = require("../controllers/reelController");

router.get("/", reelController.getAllReel);
router.get("/:userId", reelController.getReelOfUser);
router.post("/", reelController.createReel);
router.delete("/:id", reelController.deleteAReelByOwner);

module.exports = router;
