import { useMovies } from "../Context/MovieContext";

export default function MovieCard({ movie }) {
  const { addToCart, deleteMovie, updateMovie } = useMovies();

  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#fafafa",
      }}
    >
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Price: ${movie.price}</p>

      <button onClick={() => addToCart(movie)}>Add to Cart</button>

      <button
        onClick={() =>
          updateMovie(movie.id, { title: movie.title + " (Updated)" })
        }
      >
        Update
      </button>

      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
}
