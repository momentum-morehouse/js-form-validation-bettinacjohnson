function valid() {

  let name = document.querySelector('#name');
  //console.log(name.value);
  let car = document.querySelector('#car-year');
  //console.log(car);
  let form = document.querySelector('#parking-form');

  let date = document.querySelector('#start-date');
  let days = document.querySelector('#days');
  let creditcard = document.querySelector('#credit-card');
  let cvv = document.querySelector('#cvv');
  let expiration = document.querySelector('#expiration');
  form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e.target);
})
  
}

valid();

// console.log('Add validation!');
// <div class="input-field input-valid">
//   <label>Valid</label>
//   <input type="text">
// </div>

// <div class="input-field input-invalid">
//   <label>Invalid</label>
//   <input type="text">
// </div>

function validateName() {
    let name = document.querySelector('#name');
    let nameField = document.querySelector("#name-field")

    if (name.value.trim() === " ") {
        nameField.classList.add("input-invalid")
    }
    else {
        nameField.classList.add("input-valid")
    }
}

valid();
function validateCar() {
    let car = document.querySelector('#car-field');
    let carField = document.querySelector("car-field");

    if (car.value.trim() === " ") {
        carField.classList.add("input-valid")
    }
    else {
        carField.classList.add("input-valid")
    }
}