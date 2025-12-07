import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  // New review form
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  // Editing review
  const [editing, setEditing] = useState(null);

  // Load movie + reviews
  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);

    fetch(`http://localhost:5000/api/reviews/${id}`)
      .then((res) => res.json())
      .then(setReviews);
  }, [id]);

  // Submit new review
  const submitReview = async () => {
    const newReview = { movieId: id, name, rating, comment };

    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    const saved = await res.json();
    setReviews([...reviews, saved]);
    setName("");
    setRating(5);
    setComment("");
  };

  // Delete review
  const deleteReview = async (reviewId) => {
    await fetch(`http://localhost:5000/api/reviews/${reviewId}`, {
      method: "DELETE",
    });

    setReviews(reviews.filter((rev) => rev._id !== reviewId));
  };

  // Save edited review
  const saveEdit = async () => {
    const res = await fetch(
      `http://localhost:5000/api/reviews/${editing._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      }
    );

    const updated = await res.json();

    setReviews(reviews.map((rev) => (rev._id === updated._id ? updated : rev)));

    setEditing(null);
  };

  if (!movie) return <p style={{ padding: 30 }}>Loading movie...</p>;

  return (
    <div style={{ padding: 30, maxWidth: 700, margin: "auto" }}>
      <h1>{movie.title}</h1>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Price:</strong> ${movie.price}
      </p>

      <hr />

      <h2>Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((rev) => (
          <div
            key={rev._id}
            style={{
              borderBottom: "1px solid #ccc",
              marginBottom: 15,
              paddingBottom: 10,
            }}
          >
            <strong>{rev.name}</strong> – ⭐ {rev.rating}
            <p>{rev.comment}</p>
            <button onClick={() => setEditing(rev)}>Edit</button>
            <button
              style={{ marginLeft: 10, color: "red" }}
              onClick={() => deleteReview(rev._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}

      <hr />

      <h2>Add a Review</h2>

      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      >
        <option value="5">⭐ 5 - Amazing</option>
        <option value="4">⭐ 4 - Great</option>
        <option value="3">⭐ 3 - Good</option>
        <option value="2">⭐ 2 - Bad</option>
        <option value="1">⭐ 1 - Awful</option>
      </select>

      <textarea
        placeholder="Write a review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 10,
          minHeight: 80,
        }}
      />

      <button onClick={submitReview}>Submit Review</button>

      {editing && (
        <div style={{ marginTop: 30 }}>
          <hr />
          <h2>Edit Review</h2>

          <input
            value={editing.name}
            onChange={(e) => setEditing({ ...editing, name: e.target.value })}
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />

          <select
            value={editing.rating}
            onChange={(e) =>
              setEditing({ ...editing, rating: Number(e.target.value) })
            }
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          >
            <option value="5">⭐ 5 - Amazing</option>
            <option value="4">⭐ 4 - Great</option>
            <option value="3">⭐ 3 - Good</option>
            <option value="2">⭐ 2 - Bad</option>
            <option value="1">⭐ 1 - Awful</option>
          </select>

          <textarea
            value={editing.comment}
            onChange={(e) =>
              setEditing({ ...editing, comment: e.target.value })
            }
            style={{
              width: "100%",
              padding: 8,
              marginBottom: 10,
              minHeight: 80,
            }}
          />

          <button onClick={saveEdit}>Save</button>
          <button style={{ marginLeft: 10 }} onClick={() => setEditing(null)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
