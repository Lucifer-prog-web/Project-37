class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.question.hide()
    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
    
    //call getContestantInfo( ) here
    getContetantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      //write code to add a note here
      textSize("*NOTE: Contestants who answered correct are highlighted in green color!!!",130,230);  
    }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns ="2";
      if(correctAns === allContestants[plr].answer){
        fill("green")
      }else{
        fill("red")
      }
    }
  }

}
