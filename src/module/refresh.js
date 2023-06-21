import Scores, { scoreContainer } from './score.js';

const refreshBtn = document.querySelector('.refresh');
const listScore = new Scores();
const recentScore = async () => {
  refreshBtn.addEventListener('click', () => {
    listScore.getList(scoreContainer);
  });
  listScore.getList(scoreContainer);
};
export default recentScore;
