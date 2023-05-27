const express = require("express");
const router = express.Router();
const watchController = require("../controllers/watchController");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });

router.get("/", watchController.getAllWatch);
router.get("/:userId", watchController.getWatchOfUser);
router.post("/", upload.single("file"), watchController.createWatch);
router.delete("/:id", watchController.deleteAWatch);

module.exports = router;
