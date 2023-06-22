import Scores, { scoreContainer } from './score.js';

const refreshBtn = document.querySelector('.refresh');
const listScore = new Scores();
const scoreList = document.createElement('ul');
scoreList.id = 'score-list';
scoreContainer.append(scoreList);
const recentScore = async () => {
  refreshBtn.addEventListener('click', () => {
    listScore.getList(scoreList);
  });
  listScore.getList(scoreList);
};
export default recentScore;
