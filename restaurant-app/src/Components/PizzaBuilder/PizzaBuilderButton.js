import React from "react";
import classes from './PizzaBuilderButton.module.css';

const PizzaBuilderButton = (props) => {

    return(
    <button className={classes.button} onClick={props.onClick} >
            {props.value}
    </button>
    );

};

export default PizzaBuilderButton;