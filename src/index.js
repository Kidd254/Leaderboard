import './style.css';
import addYourScore from './module/addScore.js';
import recentScore from './module/refresh.js';

const init = () => {
  const mainContainer = document.querySelector('.display');
  recentScore(mainContainer);
  addYourScore(mainContainer);
};

init();
