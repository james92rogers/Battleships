//start game function to get the game rolling

// this will have the computer assign their ships randomly
// they will assign their biggest ship first (4 in length), as this is most difficult.
//the process for this will be:
// picks first grid spot randomly
//based on where they are on the grid (split into quarters)// that determines which direction it goes

// a similar formula can be used to place their 3 length ship

// the way of picking it's small ship (2 in length) is simple.
// pick a random square, then filter through the available grid spaces for other squares
//are plus 1, minus 1, plus 10 or minus 10

//at the end of it all, check to make sure there are no duplicates, if there are then the process
//starts again until there are no duplicates
// all computer ship places are stored in an array

// player then picks their ships, clicking on their grid to set them
// based on the value of the clicks, that assigns the ships
// run a check based on the maths of the arrays (so minus each one against each other) to ensure
// ships are placed properly, if not, the process starts again (with an alert to let the user know)
// all player ships are stored in an array

// then alternate turns to attack
// player click on enemy grid will check if the value of the target matches the value from the ships array
// if it does, it assigns that grid space with the class of hit
//also the message on the screen will change to mention that it was a hit
// otherwise it assigns that grid with a class of miss
// again, the message screen will change to highlight this being a miss

//on computer turn it chooses randomly from an array of Available Moves
//after each move, the unit chosen is spliced from the Available Moves array
//it will also store this move as a lastMove value

//if it's a hit, the area chosen will change to a class of hit (different style from the enemy grid hit)
//store that the computers last move was a hit in a variable (true)
// store their last move as well

// if it's a miss, changes that units class to miss (again, style differently to the enemy grid)

//if computers last move was a hit, it will first cycle through a new filter array called tacticalMoves
//(name might change)
//this filter will work out from available moves for what moves are next to the last stored move
//if the length of this array is 1 or more, then it choose a move from this array
//if not, then it does the standard selecting of a move

// same for the computer in terms of the screen changing messages depending on a hit or miss

//this pattern repeats itself until either the players ships.length or computers ships.length reaches
// 0 or less. This can be done by setting the other events inside a while loop with those conditions
// when the condition is met (someone runs out of ships), the game ends.
//for the game ending, both grids will fade to black through a class change, and the message on the screen
//will mention who was won.

// there will then be a reset button which will clear the grids of their classes
// as well as clear the ship arrays and kick off the start game function again

// I'll also add a counter below to keep track of how many enemy pieces and player pieces are left
// this can be linked via the DOM to the array lengths for each side

const computer = {
    ship1: [],
    ship2: [],
    ship3: [],
    ship4: [],
    ship5: [],
    lastMoveHit: false,
    currentPick: 0,
}


const compGrid = [11, 12, 13, 14, 15, 16, 21, 22, 23, 24, 25, 26, 31, 32, 33, 34, 35, 36, 41, 42, 43, 44, 45, 46, 51, 52, 53, 54, 55, 56, 61, 62, 63, 64, 65, 66]
let computerPieces = computer.ship1.concat(computer.ship2).concat(computer.ship3)
let testForDuplicates = new Set(computerPieces)

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


function computerShip1(){
    establishFirstPartOfShip(computer.ship1)
    createFourLongShip(computer.ship1)
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

    
    function test(event){
        computerPieces = computer.ship1.concat(computer.ship2).concat(computer.ship3).concat(computer.ship4).concat(computer.ship5)
        const value = parseFloat(event.target.getAttribute("value"))
    if (computerPieces.includes(value)){
        event.target.classList.add("hit")
        const index = computerPieces.indexOf(value)
        computerPieces.splice(index, 1)
    } else {
      event.target.classList.toggle("miss")
    }
    }


buildShips()
enemyGrid.forEach(grid => grid.addEventListener("click", test))


  // function placeShip(event){
    //     const value = parseFloat(event.target.getAttribute("value"))
    //     event.target.classList.add("hit")
    //     player.ship1.push(value)
    //     console.log(player.ship1)
    // }

// function checkValid(arr, x){
//     if((arr[0] - arr[3]) === -3 || (arr[0] - arr[3]) === 3 || (arr[0] - arr[3]) === -30 || (arr[0] - arr[3]) === 30 && arr.length === x){
//         console.log("valid ship placement")
//     } else {
//         arr = []
//         console.log("invalid ship")
//     //    playerSetShip1()
//     }
// }

    // function playerSetShip1(){
    //     messageScreen.textContent = "please start by deploying your destroyer (4 in length)"
    //     playerGrid.forEach(grid => grid.addEventListener("click", placeShip))
    //     checkValid(player.ship1, 4)
    // }




    // under here is code before messing with battlecommence function

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
        currentPick: 0,
        lastPick: 0,
        isTurn: true,
    }
    
    
    const compGrid = [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 86, 87, 88]
    let computerPieces = null
    let playerPieces = null
    let testForDuplicates = null
    let testForPlayerDuplicates = null
    let compChoice = 0
    let checkHit = null
    
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
            let playerShip = window.prompt("Please select your grid placement for your carrier (5 in length) e.g. 8 16 24 32 40")
            player.ship1 = playerShip.split(" ").map(i => parseFloat(i))
            let diff = player.ship1[0] - player.ship1[4]
            if(diff === 4 || diff === - 4 || diff === 32 || diff === -32){
                fillPlayerGrid(player.ship1)
            } else {
                window.alert("invalid ship placement. Please try again")
                playerSetShip1()
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
        let nextMoveChoices = null
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
        playerPieces.splice(checkHit, 1)
       // playerGrid[compChoice].classList.add("player-hit")
       playerGrid[compChoice].innerHTML ='<i class="fas fa-burn"></i>'
        playerLives.textContent = playerPieces.length
        computer.lastMoveHit = true
        computer.lastPick = compChoice
        messageScreen.textContent = "They have hit one of our ships! Make them pay!"
    }
    
    function computerTurn(){
        if(computer.isTurn){
        computer.lastMoveHit ? computerSelectAfterHit() : computerSelectAfterMiss()
        checkHit = playerPieces.indexOf(compChoice)
        if(checkHit >= 0){
            computerHit()
        } else {
            playerGrid[compChoice].classList.add("player-miss")
            computer.lastMoveHit = false
            messageScreen.textContent = "Luckily their shot missed our ships. Strike now while we still can!"
        }
        checkHealth()
        let continueCheck = (playerPieces.length > 0 && computerPieces.length > 0) ? playerTurn() : endGame()
       }
    }
    
    function battleCommence(){    
            playerTurn()
            computerTurn()
        }
    
    function startGame(){
        setUpBoard()
        buildShips()
        compLives.textContent = computerPieces.length
       playerSetShips()
       battleCommence()
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
        startGame()
    }
    
    restartButton.addEventListener("click", restartGame)


    // const playerShip1Form = document.querySelector("#user1Ship")
    // const playerShipButton = document.querySelector("#playerShipButton")
    // const playerShip2Form = document.querySelector("#user2Ship")


//     const commitShip1 = () => {
//         const playerShip = document.getElementById("player1Ship").value
//         player.ship1 = playerShip.split(" ").map(i => parseFloat(i))
//         let diff = player.ship1[0] - player.ship1[4]
//         if(diff === 4 || diff === - 4 || diff === 32 || diff === -32){
//         fillPlayerGrid(player.ship1)
//         } else{
//         player.ship1 = []
//         window.alert("invalid ship placement. Please try again")
//         playerSetShip1()
//         }
//     }

//   function playerSetShip1(){  
//     playerShip1Form.classList.remove("hidden")
//     playerShipButton.addEventListener("click", commitShip1)
// }

// const commitShip2 = () => {
//     const playerShip = document.getElementById("player2Ship").value
//     player.ship2 = playerShip.split(" ").map(i => parseFloat(i))
//     comparePlayerShips()
//     if(playerPieces.length !== Array.from(testForPlayerDuplicates).length){
//     player.ship2 = []
//     window.alert("invalid ship placement. Please try again")
//     playerSetShip2()
//     }
//     let diff = player.ship2[0] - player.ship2[3]
//     if(diff === 3 || diff === -3 || diff === 24 || diff === -24){
//     fillPlayerGrid(player.ship2)
//     } else{
//     player.ship2 = []
//     window.alert("invalid ship placement. Please try again")
//     playerSetShip2()
//     }
// }



// function playerSetShip2(){
//     playerShip1Form.classList.add("hidden")
//     playerShip2Form.classList.remove("hidden")
//     playerShipButton.addEventListener("click", commitShip2)
// }