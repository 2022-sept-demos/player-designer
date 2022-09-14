// W: We always just
// I: `import`
/* Imports */

// G: Grab DOM elements
/* Get DOM Elements */
// G: with `getElementById()`
const playerArticle = document.getElementById('player-article');
const playerHeader = document.getElementById('player-header');
const playerAvatar = document.getElementById('player-avatar');

// L: `let` state
/* State */
let player = {
    name: 'sporty',
    avatar: 'turtle',
    theme: 'ocean',
};

// E: Events on elements
/* Events */

// D: Display from state
/* Display Functions */
function displayPlayer() {
    playerArticle.classList.value = player.theme;
    playerHeader.textContent = player.name;
    playerAvatar.src = 'assets/characters/' + player.avatar + '.png';
    playerAvatar.alt = player.avatar;
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
