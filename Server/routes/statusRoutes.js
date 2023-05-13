const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");

router.get("/", statusController.readAllStatus);
router.post("/", statusController.createStatus);
router.put("/like-status/:id", statusController.likeStatus);
router.put("/:id", statusController.updateStatus);
router.delete("/:statusId", statusController.deleteStatus);

module.exports = router;
