import Header from './Components/Layout/Header.js';
import React, { Fragment, useState } from 'react';
import MenuItems from './Components/Menu/MenuItems.js';
import PizzaBuilder from './Components/PizzaBuilder/PizzaBuilder.js';




function App() {

  const [pizzaBuilderShow, setPizzaBuilderShow] = useState(false);

  const showPizzaBuilderHandler = () => {
    console.log("PizzaBuilder works")
    setPizzaBuilderShow(true);
  }

  const hidePizzaBuilderHandler = () => {
    setPizzaBuilderShow(false);
  }

  return (
  <Fragment>
    {pizzaBuilderShow && <PizzaBuilder onHideBuilder={hidePizzaBuilderHandler} />}
    <Header />
    <MenuItems onShowPizzaBuilder={showPizzaBuilderHandler}/>
  </Fragment>
  )
    
}

export default App;
