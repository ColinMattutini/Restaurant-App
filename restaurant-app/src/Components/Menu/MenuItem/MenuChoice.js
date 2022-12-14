import classes from './MenuChoice.module.css';

const MenuChoice = (props) => {



    return(
        <li className={classes.meal}>
        <div>
            <h3>
                {props.name}
            </h3>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                {props.price}
            </div> 
        </div>
        <div>
        </div>
        </li>

    );

};

export default MenuChoice;