import React, { useState } from "react";

export const Cart = (props) => {
  const [visible, setVisible] = useState(false);
  function myToggle() {
    if (visible == true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }
  return (
    <div>
      <h1>Cart</h1>
      <button onClick={myToggle}></button>
      {visible && (
        <div>
          {props.cart.map((item, index) => {
            return <p key={item.name}>
              {item.name}
              </p>;
          })}
        </div>
      )}
    </div>
  );
};
