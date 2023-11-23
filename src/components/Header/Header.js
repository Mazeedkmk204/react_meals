import React from "react";
import classes from "./Header.module.css";
import mealsimg from "../../Assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
         <h1> ReactMeals</h1>
         <HeaderCartBtn onClick = {props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
         <img src={mealsimg} />
      </div>

    </>
  );
};

export default Header;
