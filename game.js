// LEGEND:
// 0 - empty
// 1 - t-rex
// 2 - cactus
let gameMap = [0, 2, 0, 0, 1, 0, 2, 0, 0, 2]
let ti = 4
         // ti
        // i   0, 1, 2 ................9
// directia de deplasare T-rex        
let dir = "left"

let score  = 0
let heart  = 100
  

function drawMap() {
    m.innerHTML = ``
    for(let i = 0; i < gameMap.length; i++){
        if (gameMap[i] == 0) {
            m.innerHTML += `<div></div>`  
        } else if (gameMap[i] == 1) {
        m.innerHTML += `<div class="t-rex ${dir}"></div>`  
    }  else if (gameMap[i] == 2) {
    m.innerHTML += `<div class="cactus"></div>`  
    } 
  }
// Score
  gameScore.innerHTML = `
  Score: ${score} <br>
  <img src="Heart-icon.png"> ${heart}`
 // GAME OVER 
  if( heart <= 0) { 
    alert(`GAME OVER
         Score:  ${score}
         Hp: ${heart}
         `) 
    return
   }
}

drawMap()


function actionLeft(){
    score += 10
    gameMap[ti] = 0
    ti --
    gameMap[ti] = 1
    dir = "left"
}

function actionRight(){
    score += 10
    gameMap[ti] = 0
    ti ++
    gameMap[ti] = 1
    dir = "right"
}

function cactusLeft (){
        heart -= 20
        gameMap[ti] = 2
        ti --
        gameMap[ti] = 1
}

function cactusRight (){
        heart -= 20
        gameMap[ti] = 2
        ti ++
        gameMap[ti] = 1
}

function action(){
    switch(event.key) {
        // LEFT
        case "ArrowLeft": 
        if (ti <= 0){return}
        else if(gameMap[1] == gameMap[ti]){
         cactusLeft()
        }
        else if(gameMap[6] == gameMap[ti]){
            cactusLeft()
           }
           else if(gameMap[9] == gameMap[ti]){
            cactusLeft()
           }  
         else {
            actionLeft()  
        } break
        // RIGHT
        case "ArrowRight": 
        if (ti >= 9){return}
        else if(gameMap[1] == gameMap[ti]){
        cactusRight()
        }
        else if(gameMap[6] == gameMap[ti]){
            cactusRight()
           }
           else if(gameMap[9] == gameMap[ti]){
            cactusRight()
           }
         else {
            actionRight()
        } break
    }

 drawMap()
 }

