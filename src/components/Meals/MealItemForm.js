import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

function MealItemForm(props) {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
    </form>
  );
}

export default MealItemForm;
