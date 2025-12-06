import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);
  const [reviews, setReviews] = useState({}); // movieId → list of reviews

  // ----------------------------
  //  GET ALL MOVIES
  // ----------------------------
  const fetchMovies = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/movies");
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  // ----------------------------
  //  ADD TO CART
  // ----------------------------
  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };

  // ----------------------------
  //  DELETE MOVIE
  // ----------------------------
  const deleteMovie = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/movies/${id}`, {
        method: "DELETE",
      });
      fetchMovies(); // refresh list after deleting
    } catch (err) {
      console.error("Error deleting movie:", err);
    }
  };

  // ----------------------------
  //  UPDATE MOVIE
  // ----------------------------
  const updateMovie = async (id, body) => {
    try {
      await fetch(`http://localhost:5000/api/movies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      fetchMovies();
    } catch (err) {
      console.error("Error updating movie:", err);
    }
  };

  // ----------------------------
  //  GET REVIEWS FOR A MOVIE
  // ----------------------------
  const fetchReviews = async (movieId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${movieId}`);
      const data = await res.json();

      setReviews((prev) => ({ ...prev, [movieId]: data }));
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  // ----------------------------
  //  ADD REVIEW
  // ----------------------------
  const addReview = async (movieId, reviewBody) => {
    try {
      await fetch(`http://localhost:5000/api/reviews/${movieId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewBody),
      });

      fetchReviews(movieId); // refresh reviews list
    } catch (err) {
      console.error("Error adding review:", err);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        // state
        movies,
        cart,
        reviews,

        // functions
        setMovies,
        fetchMovies,
        addToCart,
        deleteMovie,
        updateMovie,
        fetchReviews,
        addReview,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Custom hook
export const useMovies = () => useContext(MovieContext);
