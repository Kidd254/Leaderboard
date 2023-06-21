import Scores from './score.js';

const nameInput = document.querySelector('#name');
export const formElement = document.querySelector('#form');
const scoreInput = document.querySelector('#score');
const submitBtn = document.querySelector('.submit');
const addYourScore = () => {
  const listScore = new Scores();
  submitBtn.addEventListener('click', () => {
    if (scoreInput.value === '' || nameInput.value === '') {
      // eslint-disable-next-line no-alert
      return alert('Please fill the User and Score fields');
    }
    if (!Number.isNaN(parseInt(scoreInput.value, 10))) {
      return listScore.addScores(nameInput.value, scoreInput.value);
    }
    // eslint-disable-next-line no-alert
    return alert('Score must be a numeric value');
  });
};

export default addYourScore;
