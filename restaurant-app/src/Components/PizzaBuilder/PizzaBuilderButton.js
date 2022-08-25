import React from "react";
import classes from './PizzaBuilderButton.module.css';

const PizzaBuilderButton = (props) => {

    return(
    <button className={classes.button} onClick={props.onClick}>
            Build Your Own Pizza
    </button>
    );

};

export default PizzaBuilderButton;