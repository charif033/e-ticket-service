const express = require("express");
const router = express.Router();
const HelloWorld = require("../controllers/controllers");

router.get("/", HelloWorld);

module.exports = router;
