import './style.css';
import addMyScore from './module/addScore.js';
import recentScore from './module/refresh.js';

const call = () => {
  const dynamicDisplay = document.querySelector('.display');
  recentScore(dynamicDisplay);
  addMyScore(dynamicDisplay);
};

call();
