# Memory Game "Sea Safari"

![Memory Game "Sea Safari"t](./documentation/screenshot-ui-dev.png)

[You can view the website here](https://codewizard-1.github.io/memory-game-sea-safari/)

## Project Goals

The goal of the Memory game project is to develop and improve memory, concentration, visual perception and the ability to detect matches between images or cards.
Depending on the goals and audience, the Memory game project can be adapted for education, development of mental skills, or just for fun.

## Idea
While planning this project, the idea arose to create a game in a nautical style. The marine theme allows you to create a variety of cards with different images of sea creatures (fish, starfish, crabs, etc.) and attributes (ships, anchors, steering wheels, etc.), which adds variety and interest to the game.

## Design
Various elements and resources were used in the game design to create the appropriate atmosphere and visual perception: images of marine life (dolphins, whales, fish, crabs), elements of marine nature,
attributes of navigation (anchors), color palette (blue and blue shades, as these are the colors of water).

## Wireframes

When planning the project, I used Balsamiq to create wireframes.

For desktop devices:

Start page
![Alt text](./documentation/Desktop-start-page.png)

Game page
![Alt text](./documentation/Desktop-game-page.png)

Results page
![Alt text](./documentation/Desktop-results-page.png)

For mobail devices:

Start page

![Alt text](./documentation/Mobile-start-page.png)

Game page

![Alt text](./documentation/Mobile-game-page.png)

Results page

![Alt text](./documentation/Mobile-results-page.png)

## Features

The site consists of three pages: the start page, the game page and the game results page.
The website has a responsive layout that automatically adjusts as the screen size changes.


**Text**: Fonts are chosen to make the text clear and beautiful.

![Alt text](./documentation/image-6.png)


**Images**: I use high-quality images of sea animals for cards and the landscape of the seabedю


**Buttons**:  The game has two buttons: "START" and "NEW GAME". They differ in color so that the player can easily navigate the game.
\
![Alt text](./documentation/image-7.png)
![Alt text](./documentation/image-8.png)

When you hover your cursor over these buttons, they change color, which makes the game more exciting.

![Alt text](./documentation/image-9.png)
![Alt text](./documentation/image-10.png)

**Mobile-Friendly**: The design looks great on different devices, from computers to phones.

![Alt text](./documentation/image-11.png)

![Alt text](./documentation/image-12.png)


**Convenience**: The design is made so that users can easily concentrate on the game.


**Start page**: 
On the start page the player must enter his name. This is mandatory since the player’s name will be saved so that at the end of the game the player’s name, the time for which he opened all the cards, as well as his rating will be displayed in the results table.
If the player does not enter a name, the "Start" button will not be active.

![Alt text](./documentation/image-13.png)


**Game page**: 
After entering the player's name and pressing the "Start" button, the start window disappears and a field with 16 cards remains.

When a player opens cards, the game compares them with each other and if the cards are the same, then they remain open, if the cards are different, then they are turned over with their backs facing the player.

As soon as the player turns over the first card, a timer starts indicating the time.
As soon as the player finds all pairs of cards, the timer will stop. This time is needed for the results table.

![Alt text](./documentation/image-14.png)


**Results page**: 
This page shows the top 5 player scores. The table shows the player's rating, his name and the time in which he finished the game.

The less time the player spent completing the game, the higher his rating and the player moves to a higher place in the results table.

![Alt text](./documentation/image-15.png)


### Languages Used

- HTML5
- CSS3
- JavaScript

## Availability

- In the process of writing code, I focused on making the game as convenient and colorful as possible.

- I added descriptive Alt attributes to images and links. This allows screen readers to explain the purpose and context of content to users with visual impairments.

- I have integrated a hover effect on all buttons so that users can easily identify when they are interacting with a button, thereby improving the overall user experience.

## Testing

| What was done | Working correctly? |
|---------------------|:---------------------:|
| Checking the HTML code on Validator HTML successful      | <span style="background-color: green; padding: 3px;">YES</span>        |
| Checking the CSS code on Validator CSS successful      |<span style="background-color: green; padding: 3px;">YES</span>|
| Checking the JavaScript code on Validator JavaScript  successful      |<span style="background-color: green; padding: 3px;">YES</span>|
| Checking Lighthouse for mobile device  successful      | <span style="background-color: green; padding: 3px;">YES</span>|
| Checking Lighthouse for desktop device successful      | <span style="background-color: green; padding: 3px;">YES</span>|
| I click on the "Start" and "New Game" buttons      | <span style="background-color: green; padding: 3px;">YES</span>|
| If the player has not entered a name, the "Start" button is not active       |<span style="background-color: green; padding: 3px;">YES</span>|
| I clicked on all the cards one by one to make sure they opened       |<span style="background-color: green; padding: 3px;">YES</span>|
| I also checked that the "Start" and "New Game" buttons change color and are visually different after being pressed|<span style="background-color: green; padding: 3px;">YES</span>|
| Checked whether the player's name, time and rating are displayed in the results table       |<span style="background-color: green; padding: 3px;">YES</span>|
|I checked whether the player's rating changes depending on the time spent by the player on the game|<span style="background-color: green; padding: 3px;">YES</span>|

*Validator HTML*

![Alt text](./documentation/image-16.png)

*Validator CSS*

![Alt text](./documentation/image-17.png)

*Validator JavaScript*

![Alt text](./documentation/image-18.png)

*Lighthouse for mobile device*

![Alt text](./documentation/Screenshot-test-mobail-version.png)

*Lighthouse for desktop device*


![Alt text](./documentation/Screenshot-desktop-version.png)




**Fixed bugs**
- Bug 1:
Issue: when adding a large number of characters to the player’s name in the results table, the text goes out of view (see screenshot below)<br>

![Alt text](image.png)
Fix: limited the maximum number of characters to 10 using the maxlength attribute on the input element








## Frameworks and Programs Used

- [Validator HTML](https://validator.w3.org/), [Validator JavaScript](https://jshint.com/)  and 
 [Validator CSS](igsaw.w3.org) - to check errors in code.
- Google Fonts - to add and import the fonts used in the website.
- Git - for version control
- GitHub - sharing and storing the files of the website
- [Codeanywhere](https://codeanywhere.com/)  and [Gitpot](https://gitpod.io/) - to code my project
- Lighthouse - to test the accessibility of the website
- [Am I responsive?](https://ui.dev/amiresponsive) To present the website image on a different devices.
- Google Dev Tools - to test features, and responsiveness and to troubleshoot.
- [Convertio](https://convertio.co/) and [Cloudconvert](https://cloudconvert.com/) - to convert images type from JPG to WEBP.

## Credits

### Code

- The code was created inspired by the projects of "Love running" and the "Love maths" and  [this](https://www.youtube.com/live/NGwZWdn1uh0?feature=shared) video.
- The idea of a button changing color upon clicking was taken from [here](https://dsgnmania.com/)
- Some gradient colors were taken from [here](https://uigradients.com/)

### Media:

All images used are from:

- [Freesvg](https://freesvg.org/)
- [Vecteezy](https://www.vecteezy.com/)

## Deployment and local development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

- Log in (or sign up) to Github.
- Find the repository for this project, https://github.com/CodeWizard-1/memory-game-sea-safari
- Click on the Settings link.
- Click on the Pages link in the left hand side navigation bar.
- In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
- Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

How to Clone:

- Log in (or sign up) to GitHub.
- Go to the repository for this project, https://github.com/CodeWizard-1/memory-game-sea-safari.
- Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
- Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

How to Fork:

- Log in (or sign up) to Github.
- Go to the repository for this project, https://github.com/CodeWizard-1/memory-game-sea-safari.
- Click the Fork button in the top right corner.

## Features Left to Implement

If I had more time I could add:
- levels in the game with different images;
- save the player’s name so that you don’t have to enter it every time you start the game
