import React from 'react';
import logo from './logo.svg';
import './App.css';


//This is another js file in which we again create another function and call is in app.js, this function will
//works like a custom tag for us, so we can call it as <Hello></Hello> like we call App function as 
//<App />
function Hello({fname, age})//just random variable in order to use properties
 {
  return <p>
          Hello, my fullname is {fname} and my age is {age}
        </p>//this is not js, it is jsx->javascript xml
    
}
export default Hello;