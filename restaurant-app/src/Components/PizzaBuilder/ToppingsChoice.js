import React from 'react';
import ToppingsChoiceList from './ToppingsChoiceList';
import classes from './ToppingsChoice.module.css';

const TOPPINGS = [
    {
        toppingId: 't1',
        toppingName: 'Pepperoni',
        price: 1.25
    },
    {
        toppingId: 't2',
        toppingName: 'Sausage',
        price: 1.25
    },
    {
        toppingId: 't3',
        toppingName: 'Green Pepper',
        price: .75
    }
    
];


const ToppingsChoice = (props) => {

    const toppingsAvailable = TOPPINGS.map((topping) => 
        <ToppingsChoiceList 
        key = {topping.toppingId}
        name = {topping.toppingName}
        price = {topping.price} />

    )

    return(
        <div>
            <ul>   
                {toppingsAvailable}
                
            </ul>
            <h2 >
                Total Amount
                
            </h2> 

        </div>

    );
} 

export default ToppingsChoice;