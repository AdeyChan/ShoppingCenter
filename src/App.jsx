import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Johnnybutton from "./johnnybuttons";
import { Card } from "./card";
import { Cart } from "./cart";
<<<<<<< HEAD
=======
import "./App.css";
import styles from "./my-style.module.css";

>>>>>>> 594c364 (Initial commit)
function App() {
  const [inventory, setInventory] = useState([
    { id: 1, quantity: 23, name: "Chairs", price: 40 },
    { id: 2, quantity: 40, name: "Table", price: 200 },
    { id: 3, quantity: 2, name: "Bags", price: 15 },
    { id: 4, quantity: 15, name: "Plates", price: 6 },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [cart, setCart] = useState([]);

  // Make a cart state
  // Make another component to display each cart item
  // A button on each item that allows you to add that item to your cart
  // Clicking the button lowers the quantity by one
  // Adds an instance of it to your cart
  // Shows the total price of the cart.

  function addToCart(i) {
    const buggy = inventory[i];
    console.log("Adding to the cart:", buggy);

    if (buggy.quantity > 0) {
      const existingItem = cart.find((item) => item.id === buggy.id);
      console.log("Exisiting item:", existingItem);

      let updatedCart;
      if (existingItem) {
        updatedCart = cart.map((item) =>
          item.id === buggy.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            id: buggy.id,
            name: buggy.name,
            price: buggy.price,
            quantity: 1,
          },
        ];
      }

      setCart(updatedCart);

      const itemTotalPrice = buggy.price;
      setTotalPrice((prevTotal) => prevTotal + itemTotalPrice);

      const updatedInventory = [...inventory];
      updatedInventory[i] = {
        ...updatedInventory[i],
        quantity: updatedInventory[i].quantity - 1,
      };
      setInventory(updatedInventory);
    } else {
      alert("This is item it out of stock!");
    }
  }
  return (
    <>
<<<<<<< HEAD
      <h1>Website</h1>
      <Cart cart={cart}></Cart>
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
=======
      <h1 className={styles.stylist}>Website</h1>
      <Cart cart={cart}></Cart>
      <div>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
>>>>>>> 594c364 (Initial commit)
      <div>
        {inventory.map((item, index) => {
          return (
            <Card
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              addItem={() => {
                addToCart(index);
              }}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
export default App;
