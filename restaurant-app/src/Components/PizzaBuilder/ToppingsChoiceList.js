import React, { useState } from 'react';
import classes from './ToppingsChoiceList.module.css';



const ToppingsChoiceList = (props) => {

    const [isChecked, setIsChecked] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    

    const onChangeHandler = () => {
        if(!isChecked){
            setIsChecked(true);
            if(props.id === props.toppingId){
                const newTotal = props.price + totalAmount;
                setTotalAmount(newTotal);
                
            }
        }
        else{
            setIsChecked(false)
            if(props.id === props.toppingId){
                setTotalAmount(0);
            }
        };
    };

    return(
    
        <li>
            <div className={classes.toppings}>
            <h2>
                {props.name}
            </h2>
            
            <h2>
            {props.price}
            </h2>
            <div className={classes.input}>
            <input type='checkbox' 
                
                id={props.toppingId}
                name={props.name}
                price={props.price}
                checked={isChecked}
                onChange={onChangeHandler}
                />
            </div>
            </div>
            <div>{totalAmount}</div>
        </li>

    )

}

export default ToppingsChoiceList;