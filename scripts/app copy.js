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

function establishFirstPartOfShip(arr){
    const shipPart1 = compGrid[Math.floor(Math.random() * compGrid.length)]
    const index = compGrid.indexOf(shipPart1)
    arr.push(shipPart1)
    compGrid.splice(index, 1)
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
    compareShips()
    if(!compareShips()){
        computerShip2()
    }
}

function computerShip3(){
    computer.ship3 = computerShipBuilder(2)
    compareShips()
    if(!compareShips()){
        computerShip3()
    }
}

function computerShip4(){
    computer.ship4 = computerShipBuilder(2)
    compareShips()
    if(!compareShips()){
        computerShip4()
    }
}

function computerShip5(){
    computer.ship5 = computerShipBuilder(1)
    compareShips()
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
    const submitButton = document.querySelector("#submit-button")
    const inputValue = document.querySelector("#player-box")
    const submitButton2 = document.querySelector("#submit-button-2")
    const submitButton3 = document.querySelector("#submit-button-3")
    const submitButton4 = document.querySelector("#submit-button-4")
    const submitButton5 = document.querySelector("#submit-button-5")

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

function collectDataFor1(){
    playerShip = document.getElementById("player-box").value
    testShip(player.ship1, 4)
    player.validShip ? playerSetShip2() : playerSetShip1()
    }

    const playerSetShip1 = function (){
        player.ship1 = []  
        messageScreen.textContent = "Please select your grid placement for your carrier (5 in length) e.g. 8 16 24 32 40"
        inputValue.classList.remove("hidden")
        submitButton.classList.remove("hidden")
        submitButton.addEventListener("click", collectDataFor1)
       }

    function testShip(arr, x){  
        playerShip.split(" ").map(i => arr.push(parseFloat(i)))
        comparePlayerShips()
        let diff = arr[0] - arr[x]
        if((diff === x || diff === -x || diff === (x * 8) || diff === (x * -8)) && playerPieces.length === Array.from(testForPlayerDuplicates).length){
            fillPlayerGrid(arr)
            player.validShip = true
        } else {
            window.alert("invalid ship placement. Please try again")
            player.validShip = false
        }
    }    

    function collectDataFor2(){
        playerShip = document.getElementById("player-box").value
        console.log(playerShip)
        testShip(player.ship2, 3)
        player.validShip ? playerSetShip3() : playerSetShip2()
        }
  
    function playerSetShip2(){
        player.ship2 = []
        messageScreen.textContent = "Please select your grid placement for your battleship (4 in length) e.g. 3 4 5 6"
        submitButton2.addEventListener("click", collectDataFor2)
        submitButton.classList.add("hidden")
        submitButton2.classList.remove("hidden")
    }

    function collectDataFor3(){
        playerShip = document.getElementById("player-box").value
        console.log(playerShip)
        testShip(player.ship3, 2)
        player.validShip ? playerSetShip4() : playerSetShip3()
    }

    function playerSetShip3(){
        player.ship3 = []
        messageScreen.textContent = "Please select your grid placement for your destroyer (3 in length) e.g. 42 43 44"
        submitButton2.classList.add("hidden")
        submitButton3.classList.remove("hidden")
        submitButton3.addEventListener("click", collectDataFor3)
    }

    function collectDataFor4(){
        playerShip = document.getElementById("player-box").value
        console.log(playerShip)
        testShip(player.ship4, 2)
        player.validShip ? playerSetShip5() : playerSetShip4()
    }

    function playerSetShip4(){
        player.ship4 = []
        messageScreen.textContent = "Please select your grid placement for your submarine (3 in length) e.g. 35 43 51"
        submitButton3.classList.add("hidden")
        submitButton4.classList.remove("hidden")
        submitButton4.addEventListener("click", collectDataFor4)
    }

    function collectDataFor5(){
        playerShip = document.getElementById("player-box").value
        console.log(playerShip)
        testShip(player.ship5, 1)
        console.log("final test has been completed")
        player.validShip ? battleCommence() : playerSetShip5()
    }

    function playerSetShip5(){
        player.ship5 = []
        messageScreen.textContent = "Please select your grid placement for your patrol boat (2 in length) e.g. 7 15"
        submitButton4.classList.add("hidden")
        submitButton5.classList.remove("hidden")
        submitButton5.addEventListener("click", collectDataFor5)
    }

    function playerSetShips(){
        playerNumbers.forEach(i => i.classList.remove("hidden"))
        playerSetShip1()
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
      //  audio.play()
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
    //audio.play()
    playerPieces.splice(checkHit, 1)
   // playerGrid[compChoice].classList.add("player-hit")
   playerGrid[compChoice].innerHTML ='<i class="fas fa-burn"></i>'
    playerLives.textContent = playerPieces.length
    computer.secondLastPick = computer.lastMoveHit
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

function computerTurn(){
    if(computer.isTurn){
    reassignPicks()
    computerChoosePick()    
    checkHit = playerPieces.indexOf(compChoice)
    if(checkHit >= 0){
        computerHit()
    } else {
        playerGrid[compChoice].classList.add("player-miss")
        computer.secondLastMoveHit = computer.lastMoveHit
        computer.lastMoveHit = false
        messageScreen.textContent = "Luckily their shot missed our ships. Strike now while we still can!"
    }
    checkHealth()
    let continueCheck = (playerPieces.length > 0 && computerPieces.length > 0) ? playerTurn() : endGame()
   }
}

function battleCommence(){   
    playerNumbers.forEach(i => i.classList.add("hidden"))
    shipLengthSection.classList.remove("hidden")
    playerLives.textContent = playerPieces.length
    inputValue.classList.add("hidden")
    submitButton5.classList.add("hidden")
        playerTurn()
        computerTurn()
    }

function startGame(){
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