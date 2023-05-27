const express = require("express");
const router = express.Router();
const marketController = require("../controllers/marketController");

router.get("/", marketController.getItems);
router.get("/bought/:idBuyer", marketController.getBought);
router.post("/", marketController.createItem);
router.post("/buy", marketController.buyItem);

module.exports = router;
