import { useMovies } from "../Context/MovieContext";

export default function CartItem({ item }) {
  const { cart, setCart } = useMovies();

  const increase = () => {
    setCart(
      cart.map((m) =>
        m._id === item._id ? { ...m, quantity: m.quantity + 1 } : m
      )
    );
  };

  const decrease = () => {
    if (item.quantity === 1) {
      remove();
      return;
    }
    setCart(
      cart.map((m) =>
        m._id === item._id ? { ...m, quantity: m.quantity - 1 } : m
      )
    );
  };

  const remove = () => {
    setCart(cart.filter((m) => m._id !== item._id));
  };

  return (
    <div style={{ padding: 15, borderBottom: "1px solid #ccc" }}>
      <h3>{item.title}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price * item.quantity}</p>

      <button onClick={increase}>+</button>
      <button onClick={decrease} style={{ marginLeft: 10 }}>
        -
      </button>
      <button onClick={remove} style={{ marginLeft: 10, color: "red" }}>
        Remove
      </button>
    </div>
  );
}
