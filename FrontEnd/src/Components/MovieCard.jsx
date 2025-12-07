import { Link } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";

export default function MovieCard({ movie }) {
  const { cart, setCart } = useMovies();

  const addToCart = () => {
    const exists = cart.find((item) => item._id === movie._id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item._id === movie._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
  };

  return (
    <div
      className="movie-card"
      style={{ border: "1px solid #ccc", padding: 20 }}
    >
      {/* ⭐ Make movie title clickable — goes to Movie Details page */}
      <h3>
        <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
      </h3>

      <p>{movie.genre}</p>
      <p>${movie.price}</p>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
