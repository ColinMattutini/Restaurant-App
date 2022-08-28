import { useReducer } from "react";
import PizzaBuilderContext from './pizzabuildercontext.js';

const defaultBuilderState = {
    toppings: [],
    totalAmount: 0,
};

