import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>🛒 Cart</h2>

      {items.length === 0 && <p className="empty">Cart is empty</p>}

      {items.map(item => (
        <div key={item.id} className="item">
          <span>
            {item.name} ₹{item.price} × {item.quantity}
          </span>

          <div>
            <button
              className="add-btn"
              onClick={() =>
                dispatch(addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                }))
              }
            >
              +
            </button>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              −
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && <h3>Total: ₹{totalAmount}</h3>}
    </div>
  );
}

export default Cart;
