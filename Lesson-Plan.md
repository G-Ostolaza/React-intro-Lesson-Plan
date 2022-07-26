
## Learning Objectives
---
By the end of this session, learners will be able to:

- Pass props down to child components from parent components					
- Create and render React Components					

---

## Glossary
---

#### **Component**: A JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

#### **Props**: A kind of global variable or object passed into React components as arguments. Prop is short for property.

#### **Fragment**: React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component.

#### **JSX**: A React extension to the JavaScript language syntax which provides a way to structure component rendering using syntax familiar to many developers. It is similar in appearance to HTML.
---

## What is React?
---
#### React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
---

## What is a Component?
---
#### React components are independent and reusable code. They are the building blocks of any React application. Components serve the same purpose as JavaScript functions, but work individually to return JSX code as elements for our UI. These components may or may not receive data as parameters.
---

## What is JSX?
---
#### JSX stands for JavaScript syntax extension. It is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template. It is an XML-like extension that allows us to write JavaScript that looks like HTML markup and have it returned from a component.
---
## What are props?
---
#### props is a special keyword in React, which stands for properties and is used for passing data from one component to another. But the important part here is that data with props are being passed in a uni-directional flow ( one way from parent component to the child component). Props are read-only and therefore immutable. You can pass any type of data available in JavaScript — such as number, Boolean, or object — into props. Props are declared in the same way that one would declare an HTML attribute in an element.
---
## What is a React Fragment?
---
#### React also gives us an element called a fragment (<> </>). React requires that all returned elements be returned within a single “parent” component. If we don’t want to wrap our elements in a container element like a div, we can use a fragment:
---

## Initial Setup:
---
#### The first thing we need to do is set up our React project, we are going to do this from scratch. We need to create a project directory. Let us call this directory react_Intro. We need to cd into this directory to initialize our project. Then we need to initialize our app with the package.json by inputting the command npm init -y, then following this we will need to install all of our dependencies with the command npm install react react-dom react scripts. 

```Terminal Commands:```

    mkdir react_intro
    cd react_intro
    npm init -y
    npm install react react-dom react-scripts
---

#### Once we have this installed we now need to create Two sub directories in this project. Lets go ahead and configure these folders and files. The first directory we will create is the public folder with an index.html file. The second directory we will create is the src folder with an index.js file. Please enter the following commands.

```Terminal Commands:```

    mkdir public src src/Components
    touch public/index.html
    touch src/index.js
---

#### Let’s now open the index.html and enter some code. To create a boilerplate HTML  file we can use the eslint short cut by pressing the “!” (bang) button. This is located in the upper left on your keyboard. Once we have the boilerplate HTML,  we need to create a “div” element with an “id” attribute called “root”, and place this in the body of our HTML file.
---

***This root element will serve as the root element of the React DOM tree.***

***We will now add the scripts property to our package.json file.***

```
1.Open the package.json file.

2.Under the scripts property add the following key value pairs. Your Scripts property should reflect the code below.

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  },
```
---

#### Now we will create our first component. This component will be the top level component of our React App. 

#### Lets now open the index.js file in our src folder. This file is where we will create our App component.

```In the index.js file Copy and paste the following code.```

```
import React from 'react'
import ReactDom from 'react-dom';
 
const App = () => {
    return (
        "Hello World"
    );
};

ReactDom.render(<App/>, document querySelector("#root"));
```
---

```Let’s have a check and see if we are able to launch the React application. We need to navigate back to the root of the project in terminal. Then we can type the command npm start.```

```
npm start
```
---

***If we open a browser at localhost:3000 we should now see our text from the App component. If we inspect, we can see that there is a div with an id of “root” and the div is containing the text Hello World.***

#### Now lets edit the index.js file to display some hard coded elements.
---
## Editing the index.js file
---
***Copy and paste the code below***
```
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
        </>
    )
```

#### The code we copied here is hard coded into the return statement. If we view it in our browser we can see that it now renders the div, ol, and li elements. This is very similar to a regular HTML document. One thing you may notice is the Fragment (<> </>) we have containing all of our elements.
---
***Can anyone tell me why we use this Fragment element, based on the glossary definition provided?***

---

#### Now we are going to try something a little different, we are going to create a sub-component to bring into this App component.

#### Lets now create a folder in our Component folder to hold our sub-component. First open a new terminal window and remain in the root folder. Please enter the following command.
```Terminal Command```

```
mkdir src/Components/Grocery_List
```
---
#### Now we need to add a Component file. Please enter the following command.

```Terminal Command```
```
touch src/Components/Grocery_List/Grocery_list_props.js
```
---
### Building out our First Sub-Component:
---
#### Lets navigate to our components folder and open the ***Grocery_list_props.js*** Please Copy and paste the code below into the file.

```
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
 ```
 ---

 #### We are now declaring our function with ES6 syntax and exporting it at the bottom of the file. The export default  allows us to use this Component in other locations of our React app.

#### Now as you may notice we have a parameter of props in our Grocery_list_props function. This parameter gives us access to the props object. However to use this props object we need to pass it some values. We would do this from the parent component where we are creating an instance of this component; in the Index.js file.
---
## Editing the index.js file
---
#### Lets now open our Index.js file and change some code in here as well, since we want to pass props to the child component
***Grocery_list_props***. We will now add a ***grocerylist object*** with some key value pairs.

***Copy and paste the code below***
```
import Grocery_list_props from './Components/Grocery_List/Grocery_list_props';
 
    const groceryList = {
        juice: 'Juice',
        vegetables: 'Vegetables',
        drink: 'Redbull',
        meat: 'Steak',
        dairy: 'Milk'
    }
```
---

#### We must now create an instance of this component to utilize it. We do this by creating something that looks like a self closing HTML tag with the component name that we imported it as ***Grocery_list_props***
---
### Let us add a new line of code to our return statement after the closing ol tag.

### We are going to create an instance of the component by typing the following:

***<Grocery_list_props />***

---

### Now we want to pass the groceryList object to this component, we do this by declaring what looks like an HTML attribute inside the component. Let’s try this now.

```Your code shoould look like the following```

```
<Grocery_list_props groceryItems={groceryList} />
```
### Now ***groceryitems*** will be the key in the ***props object*** that we can reference and use in the ***Grocery_list_props Component***

###Now we can open our  ***Grocery_list_props.js*** file and see how props are being used in our code.

### We can now access the ***props object*** as we would do any other JavaScript object using dot syntax. Which can be seen in the code we have in the  ***Grocery_list_prop Component file***

### As you may see here we are accessing the ***props object** and accessing the ***groceryitems object*** and getting the key values. Which are dynamically updating our component with the data that the groceryitems contains. 


































