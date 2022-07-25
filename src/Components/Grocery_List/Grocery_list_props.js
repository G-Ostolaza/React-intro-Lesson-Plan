import React from "react";
 
const Grocery_list_props = (props) => {
    return (
        <>
        <div>Shopping List</div>
        <ol className="List_items">
            <li>{props.groceryItems.juice}</li>
            <li>{props.groceryItems.vegetables}</li>
            <li>{props.groceryItems.drink}</li>
            <li>{props.groceryItems.meat}</li>
            <li>{props.groceryItems.dairy}</li>
        </ol>
        </>
    )
}
export default Grocery_list_props;
 
