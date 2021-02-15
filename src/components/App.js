import Car from "./Car";
import CarTwo from "./CarTwo";
import CarThree from "./CarThree";
import CarFour from './CarFour';
import CarObject from './CarObject';


function App() {
  let model1 = 'BMW';
  let model2 = "Mercedes";
  let model3 = 'Audi';
  let model4 = 'Toyota';
  let carObj = {
    type: 'Sedan',
    model: 'Lada',
    color: 'blue',
    doors_number: 3,
    hatchback: true
  };

  return (
    <div id="App">
    <Car carModel={model1}/>
    <CarTwo carModelTwo={model2}/>
    <CarThree carModelThree={model3}/>
    <CarFour carModelFour={model4}/>
    <CarObject carModelObject={carObj}/>
    </div>
  );
}

export default App;