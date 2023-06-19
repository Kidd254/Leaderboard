export default class Scores{
    constructor(){
      this.scoreList = [];  
      if(localStorage.getItem('info')){
        this.scoreList= JSON.parse(localStorage.getItem('library'));
      }
    }

    storage(score){
      this.scoreList.push(score);
      localStorage.setItem('info', JSON.stringify(this.scoreList));
    }
    
}
