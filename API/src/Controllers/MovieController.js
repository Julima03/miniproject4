const Movie = require("../Models/Movie");

exports.getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

exports.createMovie = async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
};

exports.updateMovie = async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
