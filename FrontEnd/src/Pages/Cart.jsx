import { useMovies } from "../Context/MovieContext";
import CartItem from "../Components/CartItem";

export default function Cart() {
  const { cart } = useMovies();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 30 }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? <p>No items yet.</p> : null}

      {cart.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}

      <h2>Total: ${total}</h2>
    </div>
  );
}
