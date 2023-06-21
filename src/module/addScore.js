import Scores from './score.js';

const nameInput = document.querySelector('#name');
export const formElement = document.querySelector('#form');
const scoreInput = document.querySelector('#score');
const submitBtn = document.querySelector('.submit');
const addYourScore = () => {
  const listScore = new Scores();
  submitBtn.addEventListener('click', (event) => {
    if (scoreInput.value === '' || nameInput.value === '') {
      event.preventDefault();
    }
    if (!Number.isNaN(parseInt(scoreInput.value, 10))) {
      const scored = { name: nameInput.value, score: scoreInput.value };
      // Save the name and score in the array and the local storage
      listScore.storage(scored);
      formElement.reset();
      // Creates the new scores element
      listScore.create(scored);
    }
  });
};

export default addYourScore;
