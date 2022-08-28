import React from 'react';

const PizzaBuilderContext = React.createContext({

    toppings: [],
    totalAmount: 0,
    addTopping: (topping) => {}

});

export default PizzaBuilderContext;