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
 let a =   document.querySelector('.js-score')
  a.innerHTML = `Win:${score.Wins} Lose:${score.Loses} Tile:${score.Tiles}`
localStorage.setItem('myValue', a.innerHTML)
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
window.location.href= "gameover.html"
final()

  }

  document.querySelector('.result').innerHTML = `${result}`
  document.querySelector('.move').innerHTML = `You
<img src="Images/${step}-emoji.png" class="icon">
<img src="Images/${computerMove}-emoji.png" class="icon">
Computer`
  updateScore()
  localStorage.setItem('score', JSON.stringify(score))
 }
 final()
 function final(){
  if(score.Wins>score.Loses & score.Wins>score.Tiles){
    let j = document.querySelector('.h');
    j.innerHTML= 'You Win'
localStorage.setItem('yea', j.innerHTML)
  }
  else if(score.Loses>score.Wins & score.Loses>score.Tiles){
   let j = document.querySelector('.h');
   j.innerHTML= 'You Lose'
localStorage.setItem('yea', j.innerHTML)
  }
  else if(score.Tiles > score.Wins& score.Tiles>score.Loses){
    let j = document.querySelector('.h');
    j.innerHTML= 'There is a Tile'
localStorage.setItem('yea', j.innerHTML)

  }else{
    let j = document.querySelector('.h');
    j.innerHTML= 'Replay'
   
localStorage.setItem('yea', j.innerHTML)


  }
 }
  
   
  



