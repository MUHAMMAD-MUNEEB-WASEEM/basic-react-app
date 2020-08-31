import React from 'react';
import './App.css';
import './self.css';


//This is another js file in which we again create another function and call is in app.js, this function will
//works like a custom tag for us, so we can call it as <Hello></Hello> like we call App function as 
//<App />
function Hello({fname, age})//just random variable in order to use properties
 {
  return <p className="text-color">
          Hello, my fullname is {fname} and my age is {age - 5}
        </p>//this is not js, it is jsx->javascript xml
    
}
export default Hello;