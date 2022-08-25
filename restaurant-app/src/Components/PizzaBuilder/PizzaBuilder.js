import React from "react";
import Modal from '../UI/Modal.js';

const PizzaBuilder = props => {
    return(
        <Modal onHideBuilder={props.onHideBuilder}>
            <h2>Hello</h2>
        </Modal>

    )

}

export default PizzaBuilder