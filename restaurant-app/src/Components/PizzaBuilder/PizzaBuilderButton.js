import React from "react";
import classes from './PizzaBuilderButton.module.css';

const PizzaBuilderButton = (props) => {
    <button className={classes.button} onClick={props.onShowPizzaBuilder}>
            Build Your Own Pizza
    </button>

}

export default PizzaBuilderButton;