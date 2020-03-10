const router = require("express").Router();
const controllers = require("../controllers/controllers.js");

router.get("/books", controllers.allBooks);
router.get("/popular", controllers.popularBooks);
router.get("/authors", controllers.allAuthors);

module.exports = router;
