import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealsItemForm from "./MealItemForm";
import CartContext from "../../../../store/cart-context";
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
 
  

  return (
    <li className={classes.meal}>
      <div>
        <h2> {props.name}</h2>
        <div className={classes.description}> {props.description}</div>
        <div className={classes.price}> {price}</div>
      </div>

      <div>
        <MealsItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
