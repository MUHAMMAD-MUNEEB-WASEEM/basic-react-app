import React from 'react';
import './App.css';
import Hello from "./Hello";//importing Hello from Hello.js

function App(props)//just random variable in order to use properties
//We can also write like this-> App({name, age})
//so instead of using props.name or props.age, we will simply
//use {name} and {age} where needed 

{
  return <div>
          Hello from {props.name} and age is {props.age - 5}
          <Hello fname={props.name} age={props.age}></Hello>
        </div>//this is not js, it is jsx->javascript xml
           
}
//In above, hello function will works like a tag and we pass it name and age, 
//but keep in mind that name and age should also be use as parameter in app, like 
//if in index.js, we donot pass name and age and we had already call it here in hello tag,
//then it will raise an error

export default App;//export app function to be use in index.js using <App />, or <div><App /></div>
