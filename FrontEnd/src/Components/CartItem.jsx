import { useMovies } from "../Context/MovieContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useMovies();

  return (
    <div style={styles.row}>
      <h3>{item.title}</h3>
      <p>${item.price}</p>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
      />

      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: 10,
    borderBottom: "1px solid #ddd",
  },
};
