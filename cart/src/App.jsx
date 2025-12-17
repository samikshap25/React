import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🛒 Vegetable Shopping Cart</h1>

      <div className="container">
        <Shop />
        <Cart />
      </div>
    </div>
  );
}

export default App;
