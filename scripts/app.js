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
    const playerGrid = document.querySelectorAll(".player-grid")
    const messageScreen = document.querySelector("#message")

    
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