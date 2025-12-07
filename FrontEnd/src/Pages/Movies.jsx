import { useContext, useEffect } from "react";
import { MovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

export default function Movies() {
  const { movies, getMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Movies</h1>

      {movies.length === 0 && <p>No movies available.</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
