import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label className={props.input.id} htmlFor={props.label}>
        {props.label}:
      </label>
      <input {...props.input} />
    </div>
  );
}

export default Input;
