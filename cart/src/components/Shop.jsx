import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const vegetables = [
  { id: 1, name: "Potato", price: 30 },
  { id: 2, name: "Tomato", price: 40 },
  { id: 3, name: "Onion", price: 35 },
  { id: 4, name: "Carrot", price: 50 },
  { id: 5, name: "Cabbage", price: 45 },
  { id: 6, name: "Spinach", price: 25 },
  { id: 7, name: "Brinjal", price: 60 },
  { id: 8, name: "Cauliflower", price: 55 },
  { id: 9, name: "Capsicum", price: 70 },
  { id: 10, name: "Beans", price: 65 },
];


function Shop() {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>🥦 Shop</h2>

      {vegetables.map(veg => (
        <div key={veg.id} className="item">
          <span>{veg.name}</span>
          <button
            className="add-btn"
            onClick={() => dispatch(addToCart(veg))}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
