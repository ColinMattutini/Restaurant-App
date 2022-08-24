import React,{ Fragment } from 'react';
import classes from './Header.module.css';
import pizzaImage from '../../assets/pizzaimage.jpg';

const Header = (props) => {
    return(
    <Fragment>
        <header className={classes.header}>
            
            <h1>Fake Restaurant</h1>
            
            <button className={classes.button}>Checkout</button>

        </header>
        <div className={classes['main-image']}>
            <img src={pizzaImage} alt='pizza' />
        </div>

    </Fragment>
    )


};

export default Header;