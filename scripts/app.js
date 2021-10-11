const player = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: [],
    isTurn: true,
}
const computer = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: [],
    lastMoveHit: false,
    secondLastMoveHit: false,
    currentPick: 0,
    lastPick: 0,
    secondLastPick: 0,
    isTurn: true,
}


const compGrid = [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88]
let computerPieces = null
let playerPieces = null
let testForDuplicates = null
let testForPlayerDuplicates = null
let compChoice = 0
let checkHit = null
let playerShip = null

function establishFirstPartOfShip(arr){
    const shipPart1 = compGrid[Math.floor(Math.random() * compGrid.length)]
    const index = compGrid.indexOf(shipPart1)
    arr.push(shipPart1)
    compGrid.splice(index, 1)
}


function createFourLongShip(arr){
    const randomiser = Math.floor(Math.random() * 2)
    const part1 = arr[0]
    if(((part1 - 1) % 10 === 0 || (part1 - 2) % 10 === 0 || (part1 - 3) % 10 === 0) && arr[0] < 40){
            (randomiser === 0) ? arr.push(arr[0] + 10, arr[0] + 20, arr[0] + 30) : arr.push(arr[0] + 1, arr[0] + 2, arr[0] + 3)
        } else if(arr[0] < 40){
            (randomiser === 0) ? arr.push(arr[0] + 10, arr[0] + 20, arr[0] + 30) : arr.push(arr[0] - 1, arr[0] - 2, arr[0] - 3)
        } else if(((part1 - 1) % 10 === 0 || (part1 - 2) % 10 === 0 || (part1 - 3) % 10 === 0) && arr[0] > 40){
            (randomiser === 0) ? arr.push(arr[0] - 10, arr[0] - 20, arr[0] - 30) : arr.push(arr[0] + 1, arr[0] + 2, arr[0] + 3)
        } else if(arr[0] > 40){
            (randomiser === 0) ? arr.push(arr[0] - 10, arr[0] - 20, arr[0] - 30) : arr.push(arr[0] - 1, arr[0] - 2, arr[0] - 3)      
            } 
        }

    function createFiveLongShip(arr){
        const randomiser = Math.floor(Math.random() * 2)
    if(((arr[0] - 1) % 10 === 0 || (arr[0] - 2) % 10 === 0 || (arr[0] - 3) % 10 === 0 || (arr[0] - 4) % 10 === 0) && arr[0] < 50){
            (randomiser === 0) ? arr.push(arr[0] + 10, arr[0] + 20, arr[0] + 30, arr[0] + 40) : arr.push(arr[0] + 1, arr[0] + 2, arr[0] + 3, arr[0] + 4)
        } else if(arr[0] < 50){
            (randomiser === 0) ? arr.push(arr[0] + 10, arr[0] + 20, arr[0] + 30, arr[0] + 40) : arr.push(arr[0] - 1, arr[0] - 2, arr[0] - 3, arr[0] - 4)
        } else if(((arr[0] - 1) % 10 === 0 || (arr[0] - 2) % 10 === 0 || (arr[0] - 3) % 10 === 0 || (arr[0] - 4) % 10 === 0) && arr[0] > 50){
            (randomiser === 0) ? arr.push(arr[0] - 10, arr[0] - 20, arr[0] - 30, arr[0] - 40) : arr.push(arr[0] + 1, arr[0] + 2, arr[0] + 3, arr[0] + 4)
        } else if(arr[0] > 50){
            (randomiser === 0) ? arr.push(arr[0] - 10, arr[0] - 20, arr[0] - 30, arr[0] - 40) : arr.push(arr[0] - 1, arr[0] - 2, arr[0] - 3, arr[0] - 4)      
            } 
    }



function computerShip1(){
    establishFirstPartOfShip(computer.ship1)
    createFiveLongShip(computer.ship1)
  //  console.log(computer.ship1)
}

function computerShip2(){
    computer.ship2 = []
    establishFirstPartOfShip(computer.ship2)
    createFourLongShip(computer.ship2)
//    console.log(computer.ship2)
    compareShips()
   let check = (computerPieces.length !== Array.from(testForDuplicates).length) ? computerShip2() : null
}

function createThreeLongShip(arr){
    const randomiser = Math.floor(Math.random() * 2)
    const part1 = arr[0]
    if(((part1 - 1) % 10 === 0 || (part1 - 2) % 10 === 0 || (part1 - 3) % 10 === 0) && arr[0] < 40){
            (randomiser === 0) ? arr.push(arr[0] + 10, arr[0] + 20) : arr.push(arr[0] + 1, arr[0] + 2)
        } else if(arr[0] < 40){
            (randomiser === 0) ? arr.push(arr[0] + 10, arr[0] + 20) : arr.push(arr[0] - 1, arr[0] - 2)
        } else if(((part1 - 1) % 10 === 0 || (part1 - 2) % 10 === 0 || (part1 - 3) % 10 === 0) && arr[0] > 40){
            (randomiser === 0) ? arr.push(arr[0] - 10, arr[0] - 20) : arr.push(arr[0] + 1, arr[0] + 2)
        } else if(arr[0] > 40){
            (randomiser === 0) ? arr.push(arr[0] - 10, arr[0] - 20) : arr.push(arr[0] - 1, arr[0] - 2)      
            } 
        }

function computerShip3(){
    computer.ship3 = []
    establishFirstPartOfShip(computer.ship3)
    createThreeLongShip(computer.ship3)
//    console.log(computer.ship3)
    compareShips()
    let check = (computerPieces.length !== Array.from(testForDuplicates).length) ? computerShip3() : null
}

function computerShip4(){
    computer.ship4 = []
    establishFirstPartOfShip(computer.ship4)
    createThreeLongShip(computer.ship4)
 //   console.log(computer.ship4)
    compareShips()
    let check = (computerPieces.length !== Array.from(testForDuplicates).length) ? computerShip4() : null
}

function createTwoLongShip(arr){
    const nextAvailablePart = compGrid.filter(i => i === arr[0] + 1 || i === arr[0] - 1 || i === arr[0] + 10 || i === arr[0] - 10)
    const shipPart2 = nextAvailablePart[Math.floor(Math.random() * nextAvailablePart.length)]
    const index2 = compGrid.indexOf(shipPart2)
    compGrid.splice(index2, 1)
    arr.push(shipPart2)
}

function computerShip5(){
    computer.ship5 = []
    establishFirstPartOfShip(computer.ship5)
    createTwoLongShip(computer.ship5)
  //  console.log(computer.ship5)
    compareShips()
    let check = (computerPieces.length !== Array.from(testForDuplicates).length) ? computerShip5() : null
}

function buildShips(){
    computerShip1()
    computerShip2()
    computerShip3()
    computerShip4()
    computerShip5()
  //  console.log(computerPieces)
}

function clearComputerShips(){
    computer.ship1 = []
    computer.ship2 = []
    computer.ship3 = []
    computer.ship4 = []
    computer.ship5 = []
}

function compareShips(){
    computerPieces = computer.ship1.concat(computer.ship2).concat(computer.ship3).concat(computer.ship4).concat(computer.ship5)
    testForDuplicates = new Set(computerPieces)
}
 
    const enemyGrid = document.querySelectorAll(".comp-grid")
    const playerGrid = document.querySelectorAll(".player-grid")
    //const playerValues = playerGrid.getAttribute("value")
    const messageScreen = document.querySelector("#message")
    const startButton = document.querySelector("#start-button")
    const restartButton = document.querySelector("#restart-button")
    const playerStats = document.querySelector("#player-stats")
    const compStats = document.querySelector("#comp-stats")
    const playerLives = document.querySelector("#player-lives")
    const compLives = document.querySelector("#comp-lives")
    const playerNumbers = document.querySelectorAll(".player-grid p")
    const shipLengthSection = document.querySelector("#ship-div")
    const audio = document.querySelector("audio")

    function fillPlayerGrid(arr){  
    for(let i = 0; i < arr.length; i++){
            playerGrid[arr[i]].classList.add("player-ship")
            playerGrid[arr[i]].textContent = ""
        }      
     return       
     }

        function comparePlayerShips(){
            playerPieces = player.ship1.concat(player.ship2).concat(player.ship3).concat(player.ship4).concat(player.ship5)
            testForPlayerDuplicates = new Set(playerPieces)
        }
        

        

    function playerSetShip1(){  
        playerShip = window.prompt("Please select your grid placement for your carrier (5 in length) e.g. 8 16 24 32 40")
       // testShip(player.ship1, 4, playerSetShip1)
       // console.log(playerPieces)
        player.ship1 = playerShip.split(" ").map(i => parseFloat(i))
        let diff = player.ship1[0] - player.ship1[4]
        if(diff === 4 || diff === - 4 || diff === 32 || diff === -32){
            fillPlayerGrid(player.ship1)
        } else {
            window.alert("invalid ship placement. Please try again")
            playerSetShip1()
        }
    }

    function testShip(arr, x, func){  
        arr = playerShip.split(" ").map(i => parseFloat(i))
        let diff = arr[0] - arr[x]
        if(diff === x || diff === -x || diff === (x * 8) || diff === (x * -8)){
            fillPlayerGrid(arr)
        } else {
            window.alert("invalid ship placement. Please try again")
            func
        }
    }    
  

    function playerSetShip2(){
        let playerShip = window.prompt("Please select your grid placement for your battleship (4 in length) e.g. 3 4 5 6")
        player.ship2 = playerShip.split(" ").map(i => parseFloat(i))
        comparePlayerShips()
        let diff = player.ship2[0] - player.ship2[3]
        if((diff === 3 || diff === -3 || diff === 24 || diff === - 24) && playerPieces.length === Array.from(testForPlayerDuplicates).length){
            fillPlayerGrid(player.ship2)
        } else {
            window.alert("invalid ship placement. Please try again")
            playerSetShip2()
        }
    }

    function playerSetShip3(){
        let playerShip = window.prompt("Please select your grid placement for your destroyer (3 in length) e.g. 42 43 44")
        player.ship3 = playerShip.split(" ").map(i => parseFloat(i))
        comparePlayerShips()
        let diff = player.ship3[0] - player.ship3[2]
        if((diff === 2 || diff === -2 || diff === 16 || diff === -16) && playerPieces.length === Array.from(testForPlayerDuplicates).length){
            fillPlayerGrid(player.ship3)
        } else {
            window.alert("invalid ship placement. Please try again")
            playerSetShip3()
        }

    }

    function playerSetShip4(){
        let playerShip = window.prompt("Please select your grid placement for your submarine (3 in length) e.g. 35 43 51")
        player.ship4 = playerShip.split(" ").map(i => parseFloat(i))
        comparePlayerShips()
        let diff = player.ship4[0] - player.ship4[2]
        if((diff === 2 || diff === -2 || diff === 16 || diff === -16) && playerPieces.length === Array.from(testForPlayerDuplicates).length){
            fillPlayerGrid(player.ship4)
        } else {
            window.alert("invalid ship placement. Please try again")
            playerSetShip4()
        }
    }

    function playerSetShip5(){
        let playerShip = window.prompt("Please select your grid placement for your patrol boat (2 in length) e.g. 7 15")
        player.ship5 = playerShip.split(" ").map(i => parseFloat(i))
        comparePlayerShips()
        let diff = player.ship5[0] - player.ship5[1]
        if((diff === 1 || diff === -1 || diff === 8 || diff === -8) && playerPieces.length === Array.from(testForPlayerDuplicates).length){
            fillPlayerGrid(player.ship5)
        } else {
            window.alert("invalid ship placement. Please try again")
            playerSetShip5()      
    }
    }

    function playerSetShips(){
        playerNumbers.forEach(i => i.classList.remove("hidden"))
        playerSetShip1()
        playerSetShip2()
        playerSetShip3()
        playerSetShip4()
        playerSetShip5()
        playerNumbers.forEach(i => i.classList.add("hidden"))
        playerLives.textContent = playerPieces.length
    }

    function setUpBoard() {
        startButton.classList.add("hidden")
        enemyGrid.forEach(grid => grid.classList.add("grid-on"))
        playerGrid.forEach(grid => grid.classList.add("grid-on"))
        playerStats.classList.remove("hidden")
        compStats.classList.remove("hidden")
    }

function endGame(){
    console.log("the game is over")
    player.isTurn = false
    computer.isTurn = false
    shipLengthSection.classList.add("hidden")
    restartButton.classList.remove("hidden")
}


function checkHealth(){
       if(computerPieces.length <= 0){
            messageScreen.textContent = "You have succesfully defeated the enemy"
        } else if (computerPieces.length <= 5){
            enemyGrid.forEach(grid => grid.classList.add("danger"))
        }
        if(playerPieces.length <= 0){
            messageScreen.textContent = "You have been defeated"
        } else if (playerPieces.length <= 5){
            playerGrid.forEach(grid => grid.classList.add("danger"))
        }
    }

    function playerFire(event){
        if(player.isTurn){
        const value = parseFloat(event.target.getAttribute("value"))
    if (computerPieces.includes(value)){
        event.target.classList.add("hit")
        const index = computerPieces.indexOf(value)
        computerPieces.splice(index, 1)
        compLives.textContent = computerPieces.length
        audio.play()
    } else {
      event.target.classList.add("miss")
    }
    checkHealth()
    let continueCheck = (playerPieces.length > 0 && computerPieces.length > 0) ? computerTurn() : endGame()
    }
    }

    function playerTurn(){
    enemyGrid.forEach(grid => grid.addEventListener("click", playerFire))
     }
    

let availableMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]

function computerSelectAfterMiss(){
    compChoice = availableMoves[Math.floor(Math.random() * availableMoves.length)]
    const index = availableMoves.indexOf(compChoice)
    availableMoves.splice(index, 1)
}

function computerSelectAfterHit(){
    let nextMoveChoices = []
    if(computer.lastPick % 8 === 0){
        nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 1 || i === computer.lastPick + 8 || i === computer.lastPick - 8)
    } else if((computer.lastPick + 1) % 8 === 0){
        nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 1 || i === computer.lastPick + 8 || i === computer.lastPick - 8)
    } else{
        nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 1 || i === computer.lastPick - 1 || i === computer.lastPick + 8 || i === computer.lastPick - 8)
    }
    nextMoveChoices.length > 0 ? compChoice = nextMoveChoices[Math.floor(Math.random() * nextMoveChoices.length)] : computerSelectAfterMiss()
    const index = availableMoves.indexOf(compChoice)
    availableMoves.splice(index, 1)
}

   
const computerHit = () => {
    audio.play()
    playerPieces.splice(checkHit, 1)
   // playerGrid[compChoice].classList.add("player-hit")
   playerGrid[compChoice].innerHTML ='<i class="fas fa-burn"></i>'
    playerLives.textContent = playerPieces.length
    const lastMoveHitShuffle = computer.lastMoveHit ? computer.secondLastMoveHit = true : computer.secondLastMoveHit = false
    computer.lastMoveHit = true
   // computer.lastPick = compChoice
    messageScreen.textContent = "They have hit one of our ships! Make them pay!"
}

const computerSelectAfterHitAndMiss = () => {
    let nextMoveChoices = []
    let picksDifference = computer.lastPick - computer.secondLastPick
    picksDifference === 1 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 2 || i === computer.secondLastPick + 8 || i === computer.secondLastPick - 8)
    : picksDifference === -1 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 2 || i === computer.secondLastPick + 8 || i === computer.secondLastPick - 8)
    : picksDifference === 8 && computer.lastPick % 8 === 0 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 16 || i === computer.secondLastPick + 1)
    : picksDifference === 8 && (computer.lastPick + 1) % 8 === 0 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 16 || i === computer.secondLastPick - 1)
    : picksDifference === 8 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 16 || computer.secondLastPick + 1 || computer.secondLastPick - 1)
    : picksDifference === -8 && computer.lastPick % 8 === 0 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 16 || i === computer.secondLastPick + 1)
    : picksDifference === -8 && (computer.lastPick + 1) % 8 === 0 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 16 || i === computer.secondLastPick - 1)    
    : picksDifference === -8 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 16 || i === computer.secondLastPick - 1 || i === computer.secondLastPick + 1)
    : null
    nextMoveChoices.length > 0 ? compChoice = nextMoveChoices[Math.floor(Math.random() * nextMoveChoices.length)] : computerSelectAfterHit()
    const index = availableMoves.indexOf(compChoice)
    availableMoves.splice(index, 1)
}


const computerSelectAfter2Hits = () => {
    let nextMoveChoices = []
    let picksDifference = computer.lastPick - computer.secondLastPick
    picksDifference === 1 && computer.lastPick % 8 === 0 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 1)        
    : picksDifference === -1 && (computer.lastPick + 1) % 8 === 0 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 1)
    : picksDifference === 1 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick + 1)
    : picksDifference === -1 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 1)
    : picksDifference === 8 ? nextMoveChoices = available.Moves.filter(i => i === computer.lastPick + 8)
    : picksDifference === -8 ? nextMoveChoices = availableMoves.filter(i => i === computer.lastPick - 8)
    : null    
    nextMoveChoices.length > 0 ? compChoice = nextMoveChoices[Math.floor(Math.random() * nextMoveChoices.length)] : computerSelectAfterHit()
    const index = availableMoves.indexOf(compChoice)
    availableMoves.splice(index, 1)
}

const reassignPicks = () =>{
    computer.secondLastPick = computer.lastPick
    computer.lastPick = compChoice
}

function computerTurn(){
    if(computer.isTurn){
    reassignPicks()    
    computer.lastMoveHit && computer.secondLastMoveHit ? computerSelectAfter2Hits()
   // : computer.secondLastMoveHit && !computer.lastMoveHit ? computerSelectAfterHitAndMiss()
    : computer.lastMoveHit ? computerSelectAfterHit()
    : computerSelectAfterMiss()
    checkHit = playerPieces.indexOf(compChoice)
    if(checkHit >= 0){
        computerHit()
    } else {
        playerGrid[compChoice].classList.add("player-miss")
        const lastMoveHitShuffle = computer.lastMoveHit ? computer.secondLastMoveHit = true : computer.secondLastMoveHit = false
        computer.lastMoveHit = false
        messageScreen.textContent = "Luckily their shot missed our ships. Strike now while we still can!"
    }
    checkHealth()
    let continueCheck = (playerPieces.length > 0 && computerPieces.length > 0) ? playerTurn() : endGame()
   }
}

function battleCommence(){   
    shipLengthSection.classList.remove("hidden") 
        playerTurn()
        computerTurn()
    }

function startGame(){
    setUpBoard()
    buildShips()
    compLives.textContent = computerPieces.length
   playerSetShips()
   if(playerPieces.length = 17){
   battleCommence()
   }
}

startButton.addEventListener("click", startGame)


function clearPlayerShips(){
    player.ship1 = []
    player.ship2 = []
    player.ship3 = []
    player.ship4 = []
    player.ship5 = []
}

function restartGame(){
    clearComputerShips()
    clearPlayerShips()
    playerGrid.forEach(i => i.classList.remove("player-ship", "player-miss", "player-hit", "danger"))
    enemyGrid.forEach(i => i.classList.remove("hit", "miss", "danger"))
    playerGrid.forEach(i => i.innerHTML = '')
    restartButton.classList.add("hidden")
    player.isTurn = true
    computer.isTurn = true
    computer.lastMoveHit = false
    computer.secondLastMoveHit = false
    computer.lastPick = 0
    availableMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
    startGame()
}

restartButton.addEventListener("click", restartGame)