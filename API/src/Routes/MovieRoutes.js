const express = require("express");
const router = express.Router();
const MovieController = require("../Controllers/MovieController");

router.get("/", MovieController.getAllMovies);
router.post("/", MovieController.createMovie);
router.put("/:id", MovieController.updateMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;
