const express = require("express");
const router = express.Router();
const watchController = require("../controllers/watchController");

router.get("/", watchController.getAllWatch);
router.get("/:userId", watchController.getWatchOfUser);
router.post("/", watchController.createWatch);
router.delete("/:id", watchController.deleteAWatch);

module.exports = router;
