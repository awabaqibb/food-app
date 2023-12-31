import React, { Fragment } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "../Meals/MealItemForm";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3 className={classes.h3}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm key={props.id} />
      </div>
    </li>
  );
}

export default MealItem;
