import { Fragment } from 'react';
import AvailableItems from './AvailableItems.js';
import StoreSummary from './StoreSummary.js';

const MenuItems = () => {
    return (
        <Fragment>
            <StoreSummary />
            <AvailableItems />
        </Fragment>


    )
}

export default MenuItems;