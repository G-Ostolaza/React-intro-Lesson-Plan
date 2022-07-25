import React from 'react'
import ReactDom from 'react-dom'
import Grocery_list_props from './Components/Grocery_List/Grocery_list_props';

 
const App = () => {
    const groceryList = {
        juice: 'Juice',
        vegetables: 'Vegetables',
        drink: 'Redbull',
        meat: 'Steak',
        dairy: 'Milk'
    }

    return (
        //This is a hard coded shopping list
        <>
            <div>Shopping List No Props</div>
            <ol className="List_items">
                <li> No props Juice</li>
                <li>No props Vegetables</li>
                <li>No props Drink</li>
                <li>No props Meat</li>
                <li>No props Dairy</li>
            </ol>
            <Grocery_list_props  groceryItems={groceryList} />
        </>
    )
};

ReactDom.render(<App/>, document.querySelector("#root"));
