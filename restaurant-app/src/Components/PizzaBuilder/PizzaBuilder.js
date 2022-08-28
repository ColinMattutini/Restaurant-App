import React from "react";
import Modal from '../UI/Modal.js';
// import classes from './PizzaBuilder.module.css';
import PizzaBuilderButton from './PizzaBuilderButton.js';
import ToppingsChoice from './ToppingsChoice.js';

const buttonWord = "Close";

const PizzaBuilder = props => {
    return(
        <Modal onHideBuilder={props.onHideBuilder}>
            <ToppingsChoice />
            <PizzaBuilderButton onClick={props.onHideBuilder} value={buttonWord}></PizzaBuilderButton>
        </Modal>

    )

}

export default PizzaBuilder;