import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label className={props.input.id} htmlFor={props.label}>
        {props.label}:
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
