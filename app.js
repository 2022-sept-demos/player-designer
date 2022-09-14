// W: We always just
// I: `import`
/* Imports */

// G: Grab DOM elements
/* Get DOM Elements */
// G: with `getElementById()`
const playerArticle = document.getElementById('player-article');
const playerHeader = document.getElementById('player-header');
const playerAvatar = document.getElementById('player-avatar');
const nameInput = document.getElementById('name-input');
const avatarSelect = document.getElementById('avatar-select');
const themeSelect = document.getElementById('theme-select');
const skillsList = document.getElementById('skills-list');

// L: `let` state
/* State */
let player = {
    name: 'Sporty',
    avatar: 'turtle',
    theme: 'ocean',
    skills: [],
};

// E: Events on elements
/* Events */
nameInput.addEventListener('input', () => {
    // change the player.name property
    player.name = nameInput.value;
    // redisplay
    displayPlayer();
});

avatarSelect.addEventListener('change', () => {
    player.avatar = avatarSelect.value;
    displayPlayer();
});

themeSelect.addEventListener('change', () => {
    player.theme = themeSelect.value;
    displayPlayer();
});

// D: Display from state
/* Display Functions */
function displayPlayer() {
    playerArticle.classList.value = player.theme;
    playerHeader.textContent = player.name;
    playerAvatar.src = 'assets/characters/' + player.avatar + '.png';
    playerAvatar.alt = player.avatar;
}

function displaySkills() {
    // clear the list:
    skillsList.innerHTML = '';

    for (let skill of player.skills) {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.append(li);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displaySkills();
