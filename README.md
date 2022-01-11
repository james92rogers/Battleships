# Battleships #

Solo Project  
Time Frame: 8 days  
Play The Game:https://bit.ly/jrbattleships  


## Overview ##

This was my first project on the General Assembly Software Engineering course, where we were tasked to make a grid based game using HTML, CSS and JavaScript. I selected to do Battleships, as I was excited by the challenge of programming the computer to make moves tactically (and also I used to love this game when I was a kid).


![Screenshot of the finished product](./assets/readme_images/battleships.png)

## The Brief ##

* Create a grid based game in the browser.
* The game must be one player, where the user battles against the computer.
* The computer must be able to randomly place its pieces at the start of the game.
* The computer should be able to make random attacks on the players board.
* Design logic for winning and losing and display this on the screen.
* Include separate HTML, CSS and JavaScript files.
* Deploy your game online.


## Additional Challenges ##

* Include a responsive design.
* Have the computer make moves tactically.


## Technologies Used ##

* HTML5 (including HTML5 audio)
* CSS3 (including animation)
* JavaScript (ES6)
* Git
* GitHub

## Day 1 - Planning ##

When it came to the planning of this project, luckily the visuals and wireframe did not take too long, as I knew it would feature two grids that were side by side with an information box to display messages in. The main part of my planning was spent working on the pseudocode, trying to get my head around the functions I would need to create and the logic needed to make the game work. This was the pseudocode I presented at the project sign off:

```
//start game function to get the game rolling

// this will have the computer assign their ships randomly
// they will assign their biggest ship first (5 in length), as this is most difficult.
//the process for this will be:
// picks first grid spot randomly
//based on where they are on the grid (split into quarters)// that determines which direction it goes

// a similar formula can be used to place their 4 and 3 length ships

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


```

After getting the sign off, I was free to start work on the development.

## Days 2-5 - Creating MVP: ##

The first aspect I got to work on was to have the computer creating its ships. I needed it to create 5 ships in total of varying lengths and ensure that the ships stayed within the grid and didn’t overlap each other. To do this, I broke the process down into smaller chunks.

```
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
```

First, I established the first grid space of the ship by having the computer select a number from random out of the available grid spaces. This original grid space then was used to dictate which direction the rest of the ship could be built in. For example, if the space selected was in the top left quarter of the grid, then the remaining pieces would be built either to the right or down. This ensured that the computer never went over the edge of the grid.

```
function establishFirstPartOfShip(arr){
    const shipPart1 = compGrid[Math.floor(Math.random() * compGrid.length)]
    arr.push(shipPart1)
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
```

Once this was established, I set up a function that randomly decided which of the increments to use, and then built the rest of the ship to the desired length.

```
function createRestOfShip(arr, x){
    const randomiser = Math.floor(Math.random()*2)
    const incrementChoice = randomiser === 1 ? increment1 : increment2
    for(let i = 0; i < x; i++){
        arr.push(arr[i] + incrementChoice)
    }
}
```

I created the longest ship for the computer first, as this meant future overlapping of ships would become less likely. For the other ships, after it was created I ran a check to see if any of the ship grid spaces overlapped. If they did, it simply recreated the last ship created. To do this I created an array made up of all the computer ships grid placements, then used this to make a new set to eliminate any duplicates. I compared the lengths, and if they were the same then I knew they were no overlapping ships.

```
function computerShip2(){
    computer.ship2 = computerShipBuilder(3)
    if(!compareShips()){
        computerShip2()
    }
}
```

```
function compareShips() {
    computerPieces = computer.ship1.concat(computer.ship2).concat(computer.ship3).concat(computer.ship4).concat(computer.ship5)
    testForDuplicates = new Set(computerPieces)
     return computerPieces.length === Array.from(testForDuplicates).length
}
```

After this was complete, the computer was successfully creating five different ships, all within the grid and none of which overlapped.

The player selection was done in a similar way. The player was prompted to type in their desired starting location for their ship, followed by a ‘v’ or a ‘h’ to determine if their ship would be placed vertically or horizontally. The code would then check to see if the ship would fit on the grid. If it did, the ship was built, the grids on the player’s grid became coloured in, and the process moved on to the next ship. If it didn’t, or if the ship overlapped an existing player ship, the process for that ship started again.

```
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
    ```
    
    aaaa
