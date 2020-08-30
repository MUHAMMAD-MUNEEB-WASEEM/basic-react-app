import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    //ReactDOM.render this is javascript
    //then to use jsx, we use <div> or <
    //Then if we again want to switch to javascript, we use {} as we use in age


    //1
   //<div>I am working on react</div>,
    
    //2 
   //The above thing can also be written as
    //React.createElement("div", null, "Hello World using React.createElement"),
    
    //3
    //if we want to use more tag inside span then
    //React.createElement("div", null,React.createElement("span", null,"Hello World using React.createElement")),
    
    //4
    //If we want to use app.js then
    //OR <App />,//in this and below case, we wll write in app.js file under function return part
    //OR <div><App /></div>

    //using properties

    //using name property
    <div><App name="Muhammad Muneeb Waseem" age={20} /></div>,
    //to pass age we use {} as it is used for expression
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
