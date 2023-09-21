import React, { useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

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
          <div className={classes["cart-items"]} key={item.id}>
            <li>{item.name}</li>
          </div>
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
