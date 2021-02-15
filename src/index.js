import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  Homework 02
  1. Create Car component that would display the car's model. *
  2. Create variable for some car model. Pass the value from the variable as prop in the Car component. Display the car model.
  3. Implement 1 and 2 with three other car models.
  4. Create car object (type, model, color, doors number, hatchback  etc.).  Pass the object as prop in the Car component. Display the car details. 
  5. If hatchback is true, you should display the doors number increased by one.
*/