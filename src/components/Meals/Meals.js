import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Card from "../UI/Card";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <Card>
        <AvailableMeals />
      </Card>
    </Fragment>
  );
}

export default Meals;
