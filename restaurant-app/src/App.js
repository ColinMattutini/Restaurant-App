import Header from './Components/Layout/Header.js';
import React, { Fragment, useState } from 'react';
import MenuItems from './Components/Menu/MenuItems.js';
import PizzaBuilder from './Components/PizzaBuilder/PizzaBuilder.js';




function App() {

  const [pizzaBuilderShow, setPizzaBuilderShow] = useState(false);

  const showPizzaBuilder = () => {
    setPizzaBuilderShow(true);
  }

  const hidePizzaBuilder = () => {
    setPizzaBuilderShow(false);
  }

  return (
  <Fragment>
    {pizzaBuilderShow && <PizzaBuilder onHideBuilder={hidePizzaBuilder} />}
    <Header />
    <MenuItems onShowPizzabuilder={showPizzaBuilder}/>
  </Fragment>
  )
    
}

export default App;
