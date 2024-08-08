const playBoard = document.querySelector('.container')
const Game = document.querySelector('.GameOver')
const Again = document.querySelector('.playAgain')
const score = document.querySelectorAll('.score')
const momentanerScore = document.getElementById('score')
 
let scores = []
 
let gameOver = false
let zähler = 0
 
let foodX = 13
let foodY = 10
 
let snakeBody =[]
 
let snakeX = 13
let snakeY = 10
 
let velocityX = 0
let velocityY = 0
 
Again.addEventListener('click', () =>{
    updateScores()
 
    Game.classList.remove('active')
    Again.classList.remove('active')
 
    zähler = 0
    gameOver= false
 
    snakeX = 13
    snakeY = 10
 
    velocityX = 0
    velocityY = 0
 
    snakeBody =[]
    changeFoodPosition()
})
 
function updateScores(){
    if(zähler>0){
    scores.push(zähler);
    scores.sort((a, b) => b - a);
    scores = scores.slice(0, 10);
 
    for(let i = 0; i < scores.length; i++) {
        score[i].innerHTML = `${scores[i]}`;
    }
}
}
 
const changeDirection =(e) =>{
    if(e.key === 'ArrowUp'&& velocityY !== 1){
        velocityX = 0
        velocityY = -1
    }
    if(e.key === 'ArrowDown' && velocityY !== -1){
        velocityX = 0
        velocityY = 1
    }
    if(e.key === 'ArrowLeft'&& velocityX !== 1){
        velocityX = -1
        velocityY = 0
    }
    if(e.key === 'ArrowRight'&& velocityX !== -1){
        velocityX = 1
        velocityY = 0
    }
    initGame()
}
 
 
const changeFoodPosition = () =>{
    foodX = Math.floor(Math.random()* 30) +1;
    foodY = Math.floor(Math.random()* 30) +1;
}
 
const initGame =() => {
    if(gameOver) return handleGameOver()
    let htmlMark = `<div class="food" style="grid-area: ${foodY} / ${foodX}"> </div>`;
 
    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition()
        snakeBody.push([foodX,foodY])
        zähler++
    }
 
    for(let i = snakeBody.length -1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1]
    }
 
    snakeBody[0] = [snakeX, snakeY]
 
    snakeX += velocityX
    snakeY += velocityY
 
    if(snakeX <=0|| snakeY <=0|| snakeX> 30 || snakeY > 30){
        gameOver = true
    }
 
    for(let i = 0; i< snakeBody.length; i++){
        htmlMark += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"> </div>`;
    }
 
    sameSnakeBody()
   
    playBoard.innerHTML= htmlMark
    momentanerScore.innerHTML = `Your Score:${zähler}`
}
 
function handleGameOver(){
    Game.classList.add('active')
    Again.classList.add('active')
}
 
function sameSnakeBody(){
    for(let i = 1; i< snakeBody.length ; i++){
        if (snakeBody[0][1] === snakeBody[i][1] &&snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true
        }
}
}
 
changeFoodPosition()
setInterval(initGame,125)
 
document.addEventListener('keydown', changeDirection)