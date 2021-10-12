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
the next row.
