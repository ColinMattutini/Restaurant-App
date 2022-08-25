import React, { Fragment } from 'react';
import AvailableItems from './AvailableItems.js';
import StoreSummary from './StoreSummary.js';

const MenuItems = (props) => {
    return (
        <Fragment>
            <StoreSummary />
            <AvailableItems onShowPizzaBuilder={props.onShowPizzaBuilder}/>
        </Fragment>


    )
}

export default MenuItems;