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