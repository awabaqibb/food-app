import React from "react";
import classes from "./Cart.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
];

function Cart(props) {
  const cartItems = (
    <ul>
      {DUMMY_MEALS.map((item) => {
        return (
          <div className={classes["cart-items"]}>
            <li>{item.name}</li>;<li className={classes.total}>{item.price}</li>
            ;
          </div>
        );
      })}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
