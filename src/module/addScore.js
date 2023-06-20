import { display } from './score.js';
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const formElement = document.querySelector('#form');
export const addScore=(event)=> {
  // If the inputs has values then form is submitted
  if (!nameInput.validity.valueMissing && !scoreInput.validity.valueMissing) {
    event.preventDefault();
    const scored = { name: nameInput.value, score: scoreInput.value };
    // Save the name and score in the array and the local storage
    display.storage(scored);
    // Resets the form
    formElement.reset();
    // Creates the new scores element
    display.create(scored);
  }
}
formElement.addEventListener('submit', addScore);
