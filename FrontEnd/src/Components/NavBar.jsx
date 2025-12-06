import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        background: "#222",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h2 style={{ margin: 0 }}>🎬 Movie Shop</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link to="/movies" style={linkStyle}>
          Movies
        </Link>

        <Link to="/cart" style={linkStyle}>
          Cart
        </Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: "500",
};

export default NavBar;
