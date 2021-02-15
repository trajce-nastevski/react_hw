
const CarObject = (props) => {

    return (
        <div id='CarObject'>
           <h4>Car Model Object Type {props.carModelObject.type}</h4>
           <h4>Car Model Object Model {props.carModelObject.model}</h4>
           <h4>Car Model Object Color {props.carModelObject.color}</h4>
           <h4>Car Model Object Number of doors {props.carModelObject.doors_number}</h4>
           <h4>Car Model Object is it a hachback {props.carModelObject.hatchback}</h4>
           <h4>Car Model Object is it a hachback {props.carModelObject.hatchback && props.carModelObject.doors_number + 1}</h4>
        </div>
    );
}

export default CarObject;