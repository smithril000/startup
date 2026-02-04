# 260_Project
## Elevator Pitch
For my project I want to re-create a game called bank.\
-The game functions as follows\
    &emsp;&emsp;-Each player rolls two dice on their turn\
    &emsp;&emsp;-Each roll adds to everyones score\
    &emsp;&emsp;-Doubles double the score\
    &emsp;&emsp;-If anyone rolls a 7 the score goes to 0\
    &emsp;&emsp;-At anytime you can bank to save the points, but you can no longer continue to earn points.

## Key Features
&emsp;&emsp;-Login System for highscores\
&emsp;&emsp;-Dice animation\
&emsp;&emsp;-Score tracking and updating\
&emsp;&emsp;-Rule implementations

## Technology Descriptions
&emsp;&emsp;-HTML : 3 HTML pages. One for login, game, and highscore pages\
&emsp;&emsp;-CSS : support for diffenet screens, animation for different pages, and dice rolling, and score updates.\
&emsp;&emsp;-React : Login, game participants changes, and score updating\
&emsp;&emsp;-Service : Backend service with endpoints for:\
&emsp;&emsp;&emsp;&emsp;-player count\
&emsp;&emsp;&emsp;&emsp;-score count\
&emsp;&emsp;&emsp;&emsp;-highscores\
&emsp;&emsp;&emsp;&emsp;-individual score count\
&emsp;&emsp;&emsp;&emsp;-Use a thrid party dice animation(likely).\
&emsp;&emsp;-DB : stores highscores, and individual game scores, and individual player scores\
&emsp;&emsp;-WebSocket : Highscores updated for all players\

![IMG_1248](/Images/IMG_1248.jpg)

![IMG_1247](Images/IMG_1247.jpg)

## HTML deliverable
link for startup : https://startup.bankdicegame.click
For this deliverable I built out the structure of my application using HTML.

- [x] I completed the prerequisites for this deliverable
- [x] **HTML pages** - Three pages for home, gameplay, and highscores
- [x] **Proper HTML element usage** - Uses head,body, and footer along with div 
- [x] **Links** - Each page is linked together
- [x] **Text** - Appropriate text where needed
- [ ] **3rd party API placeholder** - Still unsure what will fit in with my project
- [x] **Images** - Image for dice, still a place-holder for final, but similar in style
- [x] **DB/Login** - Login area for saving highscore, nothing there just temp for now
- [x] **WebSocket** - Highscores will be updated


## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I used a common CSS file to style these `main.css`. 
- [x] **Navigation elements** - Custon buttons that change color on hover
- [x] **Responsive to window resizing** - EVerything re-sizes. I am not completely happy with it, but it does work
- [x] **Application elements** - I used a lot of `display:flex` to get things to align correctly.
- [x] **Application text content** - All text has fonts
- [x] **Application images** - I left the about image as is.