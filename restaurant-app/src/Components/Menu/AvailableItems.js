import Card from '../UI/Card';
import classes from './AvailableItems.module.css';
import MenuChoice from './MenuItem/MenuChoice';


const TEST_PIZZAS = [
    {
        id: "p1",
        name: "Bacon and Mushroom",
        description: "Bacon and Mushroom pizza",
        price: 14.99
    },
    {
        id: "p2",
        name: "Hawiaan",
        description: "Pineapple and Ham pizza",
        price: 17.99
    },
    {
        id: "p3",
        name: "Meat Lovers",
        description: "Ground beef, pepperoni, bacon, sausage pizza",
        price: 16.99
    }

];

const AvailableItems = (props) => {

    const pizzasAvailable = TEST_PIZZAS.map((pizza) => 
        
        
        <MenuChoice key={pizza.id}
            name = {pizza.name}
            descripition = {pizza.description}
            price = {pizza.price}
        />
         
    );

    return(
    <section className={classes.meals}>
    <Card>
            <ul>
               {pizzasAvailable} 
            </ul>
    </Card>
    </section>
    );

};

export default AvailableItems;