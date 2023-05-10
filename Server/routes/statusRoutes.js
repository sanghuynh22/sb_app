const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");

router.get("/", statusController.readAllStatus);
router.post("/", statusController.createStatus);
router.post("/like-status/:id", statusController.likeStatus);
router.delete("/", statusController.deleteStatus);
router.put("/:id", statusController.updateStatus);

module.exports = router;
