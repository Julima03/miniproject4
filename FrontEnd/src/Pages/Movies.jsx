import { useEffect } from "react";
import { useMovies } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

export default function Movies() {
  const { movies, fetchMovies } = useMovies();

  // Load movies from API on page load
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies</h1>

      {movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
