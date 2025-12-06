import * as movieService from "../Services/MovieService.js";

export const getMovies = async (req, res) => {
  const movies = await movieService.getAllMovies();
  res.json(movies);
};

export const getMovie = async (req, res) => {
  const movie = await movieService.getMovieById(req.params.id);
  res.json(movie);
};

export const createMovie = async (req, res) => {
  const movie = await movieService.createMovie(req.body);
  res.json(movie);
};

export const updateMovie = async (req, res) => {
  const movie = await movieService.updateMovie(req.params.id, req.body);
  res.json(movie);
};

export const deleteMovie = async (req, res) => {
  await movieService.deleteMovie(req.params.id);
  res.json({ message: "Deleted" });
};
