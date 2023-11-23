import { useState } from "react";
import Cart from "./components/Header/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Header/Meals/Meals";
import CartProvider from "./store/CartProvider"

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
     { cartShown && <Cart  onClose ={hideCartHandler}/> }
      <Header  onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
    
  );
}

export default App;
