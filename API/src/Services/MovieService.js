import Movie from "../Models/Movies.js";

export const getAllMovies = async () => {
  return await Movie.find();
};

export const getMovieById = async (id) => {
  return await Movie.findById(id);
};

export const createMovie = async (data) => {
  return await Movie.create(data);
};

export const updateMovie = async (id, data) => {
  return await Movie.findByIdAndUpdate(id, data, { new: true });
};

export const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};
