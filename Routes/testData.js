const Router = require("express");
const getData = require("../Controllers/testController");

const router = Router();

router.get("/", getData.getTestData);

module.exports = router;
