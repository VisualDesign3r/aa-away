const router  =  require("express").Router();
const inspireController = require("../../controllers/InspireController");

router.route("/inspirations")
.get(inspireController.findAll);

module.exports = router;