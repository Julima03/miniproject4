const express = require("express");
const router = express.Router();
const Movie = require("../Models/Movie");

// GET all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// ⭐ GET movie by ID  ← THIS IS WHAT YOU ARE MISSING
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(404).json({ message: "Movie not found" });
  }
});

module.exports = router;
