function move(){
  const randomNumber = Math.random()
  let computerMove = ' '
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock'
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper'
  }else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissor'
  }
  return computerMove
}
function updateScore(){
  document.querySelector('.js-score')
  .innerHTML = `Win:${score.Wins} Lose;${score.Loses} Tile:${score.Tiles}`
}

let score=JSON.parse(localStorage.getItem('score'))||{
  Wins: 0,
  Loses:0,
  Tiles:0,
}
updateScore()
 function lastMove(step){
  let computerMove = move()
  let result = ''
  if(step === 'Rock' ){
    if(computerMove === 'Rock'){
      result = 'Tile'
    }else if(computerMove === 'Scissor'){
      result = 'You win'
    }else if(computerMove === 'Paper'){
      result = 'You lose'
    }
  }else if(step === 'Paper'){
    if(computerMove === 'Rock'){
      result = 'You win'
    }else if(computerMove === 'Scissor'){
      result = 'You lose'
    }else if(computerMove === 'Paper'){
      result = 'Tile'
    }
  }
  else if(step === 'Scissor'){
    if(computerMove === 'Rock'){
      result = 'You lose'
    }else if(computerMove === 'Scissor'){
      result = 'Tile'
    }else if(computerMove === 'Paper'){
      result = 'You win'
    }
  }
  if(result === 'You win'){
    score.Wins+=1
  }else if(result === 'You lose'){
    score.Loses+=1
  }else if(result === 'Tile'){
    score.Tiles+=1
  }
  if(score.Wins + score.Loses + score.Tiles == 5){
window.location= "gameover.html"
  }

  document.querySelector('.result').innerHTML = `${result}`
  document.querySelector('.move').innerHTML = `You
<img src="Images/${step}-emoji.png" class="icon">
<img src="Images/${computerMove}-emoji.png" class="icon">
Computer`
  updateScore()
  localStorage.setItem('score', JSON.stringify(score))
 }