import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import "./App.scss";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const addToCart = (item) => {
    let isProductPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isProductPresent = true;
      }
    });

    if (isProductPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);

      return;
    }

    setCart([...cart, item]);
  };

  const handleProductQuantity = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });

    const tempArray = cart;
    tempArray[ind].amount += 0;
    if (tempArray[ind].amount === 0) {
      tempArray[ind].amount = 1;
    }

    setCart([...tempArray]);
  };

  return (
    <>
      <Header size={cart.length} setShow={setShow} />
      {show ? <Products addToCart={addToCart} /> : <Cart cart={cart} setCart={setCart} handleProductQuantity={handleProductQuantity} />}

      {warning && <div className="warning">Product is already added to your cart.</div>}
    </>
  );
};

export default App;
