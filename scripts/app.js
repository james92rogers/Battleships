const player = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: [],
    isTurn: true,
    validShip: true,
    
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
    validShip: true,
}

const compGrid = [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88]
let computerPieces = null
let playerPieces = null
let testForDuplicates = null
let testForPlayerDuplicates = null
let compChoice = 0
let checkHit = null
let playerShip = null
let computerShipGridLocation = null
let increment1 = null
let increment2 = null
let playerShipStart = null
let playerDirection = null

function establishFirstPartOfShip(arr){
    const shipPart1 = compGrid[Math.floor(Math.random() * compGrid.length)]
    const index = compGrid.indexOf(shipPart1)
    arr.push(shipPart1)
}

function createRestOfShip(arr, x){
    const randomiser = Math.floor(Math.random()*2)
    const incrementChoice = randomiser === 1 ? increment1 : increment2
    for(let i = 0; i < x; i++){
        arr.push(arr[i] + incrementChoice)
    }
}

function locateOnGrid(arr){
    if(arr[0] % 10 <= 4 && arr[0] < 50){
        increment1 = 1
        increment2 = 10
    } else if(arr[0] % 10 <= 4 && arr[0] > 50){
        increment1 = 1
        increment2 = -10
    } else if(arr[0] < 50){
        increment1 = -1
        increment2 = 10
    } else{
        increment1 = -1
        increment2 = -10
    }
}

function compareShips() {
    computerPieces = computer.ship1.concat(computer.ship2).concat(computer.ship3).concat(computer.ship4).concat(computer.ship5)
    testForDuplicates = new Set(computerPieces)
     return computerPieces.length === Array.from(testForDuplicates).length
}

function computerShipBuilder(x){
    const newShip = []
    establishFirstPartOfShip(newShip)
    locateOnGrid(newShip)
    createRestOfShip(newShip, x)
    return newShip
}

function computerShip1(){
    computer.ship1 = computerShipBuilder(4)
}

function computerShip2(){
    computer.ship2 = computerShipBuilder(3)
    if(!compareShips()){
        computerShip2()
    }
}

function computerShip3(){
    computer.ship3 = computerShipBuilder(2)
    if(!compareShips()){
        computerShip3()
    }
}

function computerShip4(){
    computer.ship4 = computerShipBuilder(2)
    if(!compareShips()){
        computerShip4()
    }
}

function computerShip5(){
    computer.ship5 = computerShipBuilder(1)
    if(!compareShips()){
        computerShip5()
    }
}

function buildShips(){
    computerShip1()
    computerShip2()
    computerShip3()
    computerShip4()
    computerShip5()
    console.log(computerPieces)
}

function clearComputerShips(){
    computer.ship1 = []
    computer.ship2 = []
    computer.ship3 = []
    computer.ship4 = []
    computer.ship5 = []
}

    const enemyGrid = document.querySelectorAll(".comp-grid")
    const playerGrid = document.querySelectorAll(".player-grid")
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
    const submitButton = document.querySelector("#submit-button")
    const inputValue = document.querySelector("#player-box")
    const submitButton2 = document.querySelector("#submit-button-2")
    const submitButton3 = document.querySelector("#submit-button-3")
    const submitButton4 = document.querySelector("#submit-button-4")
    const submitButton5 = document.querySelector("#submit-button-5")
    const backgroundMusic = document.getElementById("background-music")
    const victoryMusic = document.getElementById("victory-music")
    const defeatMusic = document.getElementById("defeat-music")

    function fillPlayerGrid(arr){  
        for(let i = 0; i < arr.length; i++){
                playerGrid[arr[i]].classList.add("player-ship")
                playerNumbers[arr[i]].classList.add("hidden")
            }      
         return       
         }

    function comparePlayerShips(){
        playerPieces = player.ship1.concat(player.ship2).concat(player.ship3).concat(player.ship4).concat(player.ship5)
        testForPlayerDuplicates = new Set(playerPieces)
        return playerPieces.length === Array.from(testForPlayerDuplicates).length
    }

    function collectPlayerData(){
        playerShip = document.getElementById("player-box").value
        playerShipStart = parseFloat(playerShip)
        playerDirection = playerShip.toLowerCase().split("")
    }

function playerShipBuilder(arr, x){
    let playerIncrement = 0
    if(playerDirection.includes("h")){
        playerIncrement = 1
    } else if(playerDirection.includes("v")){
        playerIncrement = 8
    } 
    arr.push(playerShipStart)
    let lastShipPart = playerShipStart
    for(let i = 0; i < x; i++){
    arr.push(lastShipPart + playerIncrement)
    lastShipPart += playerIncrement  
    }
}

    function buildPlayerShip1(){
        collectPlayerData()
        if((playerDirection.includes("h") && playerShipStart % 8 < 4) || (playerDirection.includes("v") && playerShipStart < 32)){
            playerShipBuilder(player.ship1, 4)
            fillPlayerGrid(player.ship1)
            playerSetShip2()
        } else{
            window.alert("invalid entry. Please try again")
        }
    }

    function playerSetShip1(){
        messageScreen.textContent = "Please select your starting square for your carrier (5 in length), followed by a 'h' for horizontal, or a 'v' for vertical - e.g. 24 h"
        inputValue.classList.remove("hidden")
        submitButton.classList.remove("hidden")
        submitButton.addEventListener("click", buildPlayerShip1)
    }
  
    function buildPlayerShip2(){
        collectPlayerData()
        if((playerDirection.includes("h") && playerShipStart % 8 < 5) || (playerDirection.includes("v") && playerShipStart < 40)){
             playerShipBuilder(player.ship2, 3)
        }
        if(comparePlayerShips() && player.ship2.length > 0){
            fillPlayerGrid(player.ship2)
            playerSetShip3()
        } else{
            player.ship2 = []
            window.alert("invalid entry. Please try again")
            playerSetShip2()
        }}
  
    function playerSetShip2(){
        messageScreen.textContent = "Please select your starting square for your battleship (4 in length), followed by a 'h' for horizontal, or a 'v' for vertical - e.g. 36 v"
        submitButton2.addEventListener("click", buildPlayerShip2)
        submitButton.classList.add("hidden")
        submitButton2.classList.remove("hidden")
    }

    function buildPlayerShip3(){
        collectPlayerData()
        if((playerDirection.includes("h") && playerShipStart % 8 < 6) || (playerDirection.includes("v") && playerShipStart < 48)){
            playerShipBuilder(player.ship3, 2)
        } 
        if(comparePlayerShips() && player.ship3.length > 0){
            fillPlayerGrid(player.ship3)
            playerSetShip4()
        } else{
            player.ship3 = []
            window.alert("invalid entry. Please try again")
            playerSetShip3()
        }}

    function playerSetShip3(){
        messageScreen.textContent = "Please select your starting square for your destroyer (3 in length), followed by a 'h' for horizontal, or a 'v' for vertical - e.g. 56 h"
        submitButton2.classList.add("hidden")
        submitButton3.classList.remove("hidden")
        submitButton3.addEventListener("click", buildPlayerShip3)
    }

    function buildPlayerShip4(){
        collectPlayerData()
        if((playerDirection.includes("h") && playerShipStart % 8 < 6) || (playerDirection.includes("v") && playerShipStart < 48)){
            playerShipBuilder(player.ship4, 2)
        } 
        if(comparePlayerShips() && player.ship4.length > 0){
            fillPlayerGrid(player.ship4)
            playerSetShip5()
        } else{
            window.alert("invalid entry. Please try again")
            player.ship4 = []
            playerSetShip4()
        }
    }

    function playerSetShip4(){
        messageScreen.textContent = "Please select your starting square for your submarine (3 in length), followed by a 'h' for horizontal, or a 'v' for vertical - e.g. 45 v"
        submitButton3.classList.add("hidden")
        submitButton4.classList.remove("hidden")
        submitButton4.addEventListener("click", buildPlayerShip4)
    }

    function buildPlayerShip5(){
        collectPlayerData()
        if((playerDirection.includes("h") && playerShipStart % 8 < 7) || (playerDirection.includes("v") && playerShipStart < 56)){
            playerShipBuilder(player.ship5, 1)
        } 
        if(comparePlayerShips() && player.ship5.length > 0){
            fillPlayerGrid(player.ship5)
            battleCommence()
        } else{
            window.alert("invalid entry. Please try again")
            player.ship5 = []
            playerSetShip5()
        }}2

    function playerSetShip5(){
        messageScreen.textContent = "Please select your starting square for your patrol boat (2 in length), followed by a 'h' for horizontal, or a 'v' for vertical - e.g. 45 v"
        submitButton4.classList.add("hidden")
        submitButton5.classList.remove("hidden")
        submitButton5.addEventListener("click", buildPlayerShip5)
    }

    function playerSetShips(){
        playerNumbers.forEach(number => number.classList.remove("hidden"))
        console.log("numbers appear")
        playerSetShip1()
    }

    function setUpBoard() {
        startButton.classList.add("hidden")
        enemyGrid.forEach(grid => grid.classList.add("grid-on"))
        playerGrid.forEach(grid => grid.classList.add("grid-on"))
        playerStats.classList.remove("hidden")
        compStats.classList.remove("hidden")
    }

function changeMusic(){
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    if(playerPieces.length <= 0){
        defeatMusic.play()
    } else if(computerPieces.length <= 0){
        victoryMusic.play()
    }
}

function endGame(){
    changeMusic()
    buildShips
    player.isTurn = false
    computer.isTurn = false
    shipLengthSection.classList.add("hidden")
    restartButton.classList.remove("hidden")
}

function continueGameCheck(){
    return playerPieces.length > 0 && computerPieces.length > 0
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
      //  audio.play()
    } else {
      event.target.classList.add("miss")
    }
    checkHealth()
    if(continueGameCheck()){
        computerTurn()
    } else {
        endGame()
    } } }

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

function computerChoosePick(){
    if(computer.lastMoveHit && computer.secondLastMoveHit){
        computerSelectAfter2Hits()
    } else if(computer.secondLastMoveHit && !computer.lastMoveHit){
        computerSelectAfterHitAndMiss()
    } else if(computer.lastMoveHit){
        computerSelectAfterHit()
    } else{
        computerSelectAfterMiss()
}
}

const computerHit = () => {
    //audio.play()
    playerPieces.splice(checkHit, 1)
    playerGrid[compChoice].classList.add("player-hit")
    playerLives.textContent = playerPieces.length
    computer.secondLastPick = computer.lastMoveHit
    computer.lastMoveHit = true
    messageScreen.textContent = "They have hit one of our ships! Make them pay!"
}

const computerMiss = () => {
    playerGrid[compChoice].classList.add("player-miss")
    computer.secondLastMoveHit = computer.lastMoveHit
    computer.lastMoveHit = false
    messageScreen.textContent = "Luckily their shot missed our ships. Strike now while we still can!"
}

function computerTurn(){
    if(computer.isTurn){
    reassignPicks()
    computerChoosePick()    
    checkHit = playerPieces.indexOf(compChoice)
    if(checkHit >= 0){
        computerHit()
    } else {
        computerMiss()
    }
    checkHealth()
    if(continueGameCheck()){
        playerTurn()
    } else {
        endGame()
    }
   }
}

function battleCommence(){   
    playerNumbers.forEach(number => number.classList.add("hidden"))
    console.log("numbers going")
    shipLengthSection.classList.remove("hidden")
    playerLives.textContent = playerPieces.length
    inputValue.classList.add("hidden")
    submitButton5.classList.add("hidden")
        playerTurn()
        computerTurn()
    }

function startGame(){
    backgroundMusic.play()
    setUpBoard()
    buildShips()
    compLives.textContent = computerPieces.length
    playerSetShips()
}

startButton.addEventListener("click", startGame)

function clearPlayerShips(){
    player.ship1 = []
    player.ship2 = []
    player.ship3 = []
    player.ship4 = []
    player.ship5 = []
}

const resetClasses = () => {
    playerGrid.forEach(grid => grid.classList.remove("player-ship", "player-miss", "player-hit", "danger"))
    enemyGrid.forEach(grid => grid.classList.remove("hit", "miss", "danger"))
    restartButton.classList.add("hidden")
}

const resetTurns = () => {
    player.isTurn = true
    computer.isTurn = true
    computer.lastMoveHit = false
    computer.secondLastMoveHit = false
    computer.lastPick = 0
    availableMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
}

function stopMusic(){
    victoryMusic.pause()
    victoryMusic.currentTime = 0
    defeatMusic.pause()
    defeatMusic.currentTime = 0
}

function restartGame(){
    clearComputerShips()
    clearPlayerShips()
    resetClasses()
    resetTurns()
    playerNumbers.forEach(i => i.classList.remove("hidden"))
    console.log("numbers appearing")
    stopMusic()
    startGame()
}

restartButton.addEventListener("click", restartGame)