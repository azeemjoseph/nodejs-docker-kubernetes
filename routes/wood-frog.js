const express = require("express");
const router = express.Router();

const woodfrog = require("../controllers/woodfrog");

router.get("/", function (req, res) {
  woodfrog.index(req, res);
});
router.post("/addwoodfrog", function (req, res) {
  woodfrog.create(req, res);
});
router.get("/getwoodfrog", function (req, res) {
  woodfrog.list(req, res);
});

module.exports = router;