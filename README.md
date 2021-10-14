# Battleships

Battleships - This is my first project from the SEI-59 General Assembly course

The first challenge I undertook was building my grids. This was simple enough in HTML/CSS,
but I did decide to do something somewhat rogue with the computer grid to aid the placement
of the computer ships. Rather than just using an index to seperate each grid space, I assigned
a custom value to each, so the top row was 11 12 13 14 15 16 17 18, then the second row was
21 22 23 24 25 26 27 28. For me this made more sense, as for example 56 means row 5, column 6.

This was something that I thought would help when it came to selecting ship placements. For example,
using the array, square 7 was the top right corner, and so when it came to adding squares, I needed to
ensure it didn't add one to the next square in the array (8 in this example) as this would be across
the next row. Using my technique, the top right square would be 18, and 19 wouldn't exist, so it would be easier to filter out available moves.

The next challenge was getting the computer to pick the placement for its ships. It was difficult to get the ships to not overlap and to stay inside the grid. In the end, I came up with the following solution:

1. The computer picks a random square on the grid
2. Depending on which corner of the grid the selected square is, that dictates the directions the ship can go. For example, top left can only go down or right, top right can go down or left etc etc.
3. I then made a function that build a ship to a desired length, in a random direction between the two available.

After building each ship, I compared the co-ordinates to ensure they didn't overlap. If they did, the last ship was made again before moving on to the next one.

Then came the player placements. This at first I did using window prompts, but later came to change this to be a user form I created. Rather than having the player pick each co-ordinate, I instead got them to only select their first square and the direction they wanted it to be in. Doing it this way made it easier for me to ensure the user was inputting valid ships that stayed on the grid and didn't overlap.

Then came the combat. Each player (the user and the computer) takes turns selecting a square at random. The game then registers if it was a hit or a miss, before passing the turn to the opposing player. For the computer this then became more challenging as I started to create logic for it's moves. For example, if the last move was registered as a hit, the next move will be one of the squares surrounding the last. If the computer has registered two hits in a row, the next move will carry along in that direction until it reaches a miss. I then got quite optimistic and tried to programme moves for if the computer registered a hit and then a miss, trying to search for valid squares around the original hit. This did lead to some issues but for the most part worked well.

Before passing the move across, it first runs a health check. If a player has a health of 5 or less ships remaining, their screen flashes red using a change in class and an animation attached to it. As an additional feature, if the user's health falls to 5 or less, the messages they receive in their message box change to highlight the urgency of the situation. If either player's health reaches 0, the end of the game is called.

Depending on who has won, a different scenario plays out. If the user wins, dramatic victory music plays and the user is congratulated for their success, before being offered to play again. If the computer wins, the player grid turns to static and the music is more sombre.
