/* eslint-disable no-console */
export const scoreContainer = document.querySelector('.display');
export default class Scores {
  constructor() {
    this.scoreList = [];
    if (localStorage.getItem('info')) {
      this.scoreList = JSON.parse(localStorage.getItem('info'));
    }
  }

  storage = (score) => {
    this.scoreList.push(score);
    localStorage.setItem('info', JSON.stringify(this.scoreList));
  };

  create = (scoreContainer) => {
    scoreContainer.innerHTML = '';
    this.scoreList.forEach((score) => {
      const scoreListContainer = document.createElement('div');
      scoreListContainer.classList.add('list-container');
      const name = document.createElement('p');
      name.classList.add('name-added');
      const points = document.createElement('p');
      points.classList.add('score-added');

      name.innerHTML = score.user;
      points.innerHTML = `: ${score.score}`;

      scoreListContainer.append(name);
      scoreListContainer.append(points);
      scoreContainer.append(scoreListContainer);
    });
    return scoreContainer;
  };

  addScores = (userData, scoreData) => {
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RPILbm8HelgXKYt5Q7oK/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          score: scoreData,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  };

  async getList(scoreContainer) {
    const fetchData = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RPILbm8HelgXKYt5Q7oK/scores/',
    );
    this.fetching(fetchData, scoreContainer);
  }

  async fetching(fetchData, scoreContainer) {
    const toJson = await fetchData.json();
    this.scoreList = toJson.result;
    this.create(scoreContainer);
  }
}
