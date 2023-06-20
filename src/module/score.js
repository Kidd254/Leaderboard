const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const formElement = document.querySelector('#form');
const scoreContainer = document.querySelector('.display');
export default class Scores{
    constructor(){
    
      this.scoreList = [];  
      if(localStorage.getItem('info')){
        this.scoreList= JSON.parse(localStorage.getItem('info'));
      }
    }

    storage=(score)=>{
      this.scoreList.push(score);
      localStorage.setItem('info', JSON.stringify(this.scoreList));
    }
    
    create=(score)=>{
      const scoreListContainer =document.createElement('div');
      scoreListContainer.classList.add('list-container')
      const name= document.createElement('p');
      name.classList.add('name-added');
      const points = document.createElement('p');
      points.classList.add('score-added')
      if (score.name && score.score) {
    name.innerHTML = score.name;
    points.innerHTML = `: ${score.score}`;
  } 
      scoreListContainer.append(name);
      scoreListContainer.append(points);
      scoreContainer.append(scoreListContainer);
    }
    displayScores() {
      
    scoreContainer.innerHTML = '';
    this.scoreList.forEach((score) => {
      this.create(score);
    });
  }
}
// A instance of the class that displays the added scores
const display = new Scores();
display.displayScores();

// A function that is called when the user clicks the submit button
const addScore=(event)=> {
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
