const player = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: [],
}
const computer = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: [],
    lastMoveHit: false,
    thisMoveHit: false,
    doubleHit: false,
    currentPick: 0,
    lastPick: 0,
    doubleHitPick: 0,
}


const compGrid = [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88]
let computerPieces = null
let playerPieces = null
let testForDuplicates = null
let testForPlayerDuplicates = null

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
    console.log(computer.ship1)
}

function computerShip2(){
    computer.ship2 = []
    establishFirstPartOfShip(computer.ship2)
    createFourLongShip(computer.ship2)
    console.log(computer.ship2)
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
    console.log(computer.ship3)
    compareShips()
    let check = (computerPieces.length !== Array.from(testForDuplicates).length) ? computerShip3() : null
}

function computerShip4(){
    computer.ship4 = []
    establishFirstPartOfShip(computer.ship4)
    createThreeLongShip(computer.ship4)
    console.log(computer.ship4)
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
    console.log(computer.ship5)
    compareShips()
    let check = (computerPieces.length !== Array.from(testForDuplicates).length) ? computerShip5() : null
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

function compareShips(){
    computerPieces = computer.ship1.concat(computer.ship2).concat(computer.ship3).concat(computer.ship4).concat(computer.ship5)
    testForDuplicates = new Set(computerPieces)
    console.log(Array.from(testForDuplicates).length)
    console.log(computerPieces.length)  
}
 
    const enemyGrid = document.querySelectorAll(".comp-grid")
    const playerGrid = document.querySelectorAll(".player-grid")
    //const playerValues = playerGrid.getAttribute("value")
    const messageScreen = document.querySelector("#message")
    const startButton = document.querySelector("#start-button")
    const playerStats = document.querySelector("#player-stats")
    const compStats = document.querySelector("#comp-stats")
    const playerLives = document.querySelector("#player-lives")
    const compLives = document.querySelector("#comp-lives")
    const playerNumbers = document.querySelectorAll(".player-grid p")

  


    

  
        function fillPlayerGrid(arr){
            for(let i = 0; i < arr.length; i++){
                playerGrid[arr[i]].classList.add("hit")
                playerGrid[arr[i]].textContent = ""
            }
            return
        }

        function comparePlayerShips(){
            playerPieces = player.ship1.concat(player.ship2).concat(player.ship3).concat(player.ship4).concat(player.ship5)
            testForPlayerDuplicates = new Set(playerPieces)
            console.log(playerPieces.length)
            console.log(Array.from(testForPlayerDuplicates).length)
        }

      function playerSetShip1(){  
        let playerShip = window.prompt("Please select your grid placement for your carrier (5 in length) e.g. 8 16 24 32 40")
        player.ship1 = playerShip.split(" ").map(i => parseFloat(i))
        let diff = player.ship1[0] - player.ship1[4]
        console.log(player.ship1[0], player.ship1[4])
        console.log(diff)
        if(diff === 4 || diff === - 4 || diff === 32 || diff === -32){
            fillPlayerGrid(player.ship1)
        } else {
            window.alert("invalid ship placement. Please try again")
            playerSetShip1()
        }
        console.log(player.ship1)
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
        console.log(playerPieces)
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


    function checkCompHealth(){
        if(computerPieces.length <= 0){
            messageScreen.textContent = "You have succesfully defeated the enemy"
        } else if (computerPieces.length <= 5){
            enemyGrid.forEach(grid => grid.classList.add("danger"))
        }
    }

    function playerFire(event){
        const value = parseFloat(event.target.getAttribute("value"))
    if (computerPieces.includes(value)){
        event.target.classList.add("hit")
        messageScreen.textContent = "A succesful hit!"
        const index = computerPieces.indexOf(value)
        computerPieces.splice(index, 1)
        compLives.textContent = computerPieces.length
    } else {
      event.target.classList.add("miss")
      messageScreen.textContent = "Nice try, but alas, it was a miss"
    }
    checkCompHealth()
    }

    function playerTurn(){
        enemyGrid.forEach(grid => grid.addEventListener("click", playerFire))
        checkCompHealth()
    }

    let availableMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]

   
    function computerTurn(){
        let compChoice = availableMoves[Math.floor(Math.random() * availableMoves.length)]
        console.log("comp chose " + compChoice)
        console.log(playerPieces)
        const index = availableMoves.indexOf(compChoice)
        availableMoves.splice(index, 1)
        const checkHit = playerPieces.indexOf(compChoice)
        if(checkHit >= 0){
            playerPieces.splice(checkHit, 1)
            playerGrid[compChoice].classList.add("player-hit")
        } else {
            playerGrid[compChoice].classList.add("player-miss")
        }

    }

function battleCommence(){
    while(playerPieces.length > 0 && computerPieces.length > 0){
        playerTurn()
        computerTurn()
    }
    //endGame()
    console.log("game is ended")
    return

}


function startGame(){
    setUpBoard()
    buildShips()
    compLives.textContent = computerPieces.length
   playerSetShips()
   battleCommence()
}

startButton.addEventListener("click", startGame)
