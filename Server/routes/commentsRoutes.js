const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");

router.get("/", commentsController.getAllComment);
router.get("/:locationId", commentsController.getCommenstOfLocation);
router.post("/", commentsController.createComment);
router.put("/:id", commentsController.updateComment);
router.delete("/:id", commentsController.deleteACommentByOwner);

module.exports = router;
