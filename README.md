# Meteor Strike
## A HTML canvas and javascript game
 This is a game built using javascript, the primary goal of this website is for people to come play the game and have fun.


 ### The Creator Goals of This Website Are:
 * To create a game that is simple to understand and play.
 * To create a game that is fun and worth giving up time to play.
 * To create a game that looks professional and runs smoothly.

 ### The User Goals of This Website Are:
 * To play a game which is simple and fun.


 # UX
 ### The ideal user:
Is a person who:
* Has free time.
* wants to relax.
* enjoys simple games.
* wants to have fun.
 
### Visitors to this website are searching for:
* A game which is easy to use and fun to play and maybe a place to compete with friends using the games score.

### This project caters for these needs by:
 1. Providing a simple game which is aesthetically pleasing.
 2. Providing a game score tracker to make the game fun and to make it easier to compete with friends.

## User Stories
1. As a user, I want to be able to easily start the game.
2. As a user, I want the game to be enjoyable.
3. As a user, I want to keep track of my score and improve at the game.
4. As a user, I want to compete with my friends.

# Features
## Existing Features:
### Home Page:
The home page consists of a main div containing the title and a short message on the left and a 'Let's Play' button on the right.
When the mouse hovers over this button it changes colour due to the use of the .mouseenter and .mouseleave jQuery methods. The button 
redirects the player to the game page when it is clicked. The short message beneath the title is also hidden on mobile screens to give 
the game a cleaner aesthetic.

### Game Page: 
When first opened the game page also has a main div containing the title, the score and a 'Go!' button. This button
has the same color changing effect as the button on the home page. This div is positioned on top of the canvas element 
which contains the game. When the 'Go!' button is clicked the div is removed using the jQuery .hide method and the game begins.

The game itself is built using javascript and a HTML canvas element and consists of:
* A player in the shape of circle positioned in the center of the screen.
* Rockets, which are smaller circles, that are fired from the center of the screen to where the mouse is clicked or the screen is touched.
* Enemies, which spawn in random places from the edges of the screen with randomised radii and color. The enemies move from the edge of the screen towards the player. 
* When rockets and enemies collide both are removed from the screen.
* Gsap is used to give the enemies a smooth shrinking animation when they collide with rockets.
* There is a score in the top left corner which is updated everytime a rocket and enemy collide.
* If the player and enemy collide the game ends.

When the game ends the div returns but this time contains the updated score, the user can then click the 'Go!' button to restart the game.

## Features to implement in the future:
1. A settings menu on the home screen which allows the user to change the difficulty of the game, the velocity of the enemies will change depending on what difficulty the user selects.
2. Add icons that link to the games social media accounts.
3. Add an option for users to pick the colour of their player in the settings menu.
4. Add a highscore which saves the users highest score achieved and displays it on the screen as they play and also on the endscreen div.


# Technologies Used:
* This Website was built using the HTML ,CSS and javascript programming languages.
*  [Gitpod](https://www.gitpod.io/) was the IDE used during the development of this project.
* [Bootstrap Cdn](https://getbootstrap.com/) was used to simplify the structure of the game and to easily make the game responsive.
* [Google Fonts](https://fonts.google.com/) was used to style the games fonts.
* [jQuery](https://jquery.com/) was used to highlight the buttons on both pages,to hide and show the game div and to start the game.
* [Gsap](https://greensock.com/gsap/) is used to create a shrinking animation when large enemies are hit by rockets.

# Testing
The testing information can be found in a seperate [TESTING.md](TESTING.md) file. 

# Deployment
This project was developed using [Gitpod IDE](https://www.gitpod.io/), committed to git and pushed to GitHub using the terminal.

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/staffordcian99/MS1-User_centric_frontend_development), the following steps were taken:

1. Log into [GitHub](github).
2. From the list of repositories on the screen, select [staffordcian99/meteor-strike](https://github.com/staffordcian99/meteor-strike).
3. From the menu items near the top of the page, select Settings.
4. Scroll down to the GitHub Pages section.
5. Under Source click the drop-down menu labelled None and select Master Branch
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

At the moment of submitting this Milestone project the Development Branch and Master Branch are identical.

# Credits
## Content



## Code 

