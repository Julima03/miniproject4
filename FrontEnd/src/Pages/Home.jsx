import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 10 }}>
        Welcome to Watchflix 🎬
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: 30 }}>
        Browse our collection of movies, add them to your cart, and leave
        reviews for your favorites.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <Link to="/movies" style={btnStyle}>
          View Movies
        </Link>

        <Link to="/cart" style={btnStyle}>
          View Cart
        </Link>
      </div>
    </div>
  );
}

const btnStyle = {
  background: "#1976d2",
  padding: "12px 20px",
  borderRadius: 8,
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
};
