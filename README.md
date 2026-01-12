# 260_Project
## Elevator Pitch
For my project I want to re-create a game called bank.\
The game functions as follows\
    \t-Each player rolls two dice on their turn\
    -Each roll adds to everyones score\
    -Doubles double the score\
    -If anyone rolls a 7 the score goes to 0\
    -At anytime you can bank to save the points, but you can no longer continue to earn points.\

## Key Features
    -Login System for highscores
    -Dice animation
    -Score tracking and updating
    -Rule implementations

## Technology Descriptions
    -HTML : 3 HTML pages. One for login, game, and highscore pages\
    -CSS : support for diffenet screens, animation for different pages, and dice rolling, and score updates.\
    -React : Login, game participants changes, and score updating\
    -Service : Backend service with endpoints for:\
        -player count\
        -score count\
        -highscores\
        -individual score count\
    -DB : stores highscores, and individual game scores, and individual player scores\
    -WebSocket : Highscores updated for all players\

    