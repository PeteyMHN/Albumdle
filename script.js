const albums = [
    "Thriller",
    "Back in Black",
    "The Dark Side of the Moon",
    "The Bodyguard",
    "Rumours"
    // Add more album names here
];

let chosenAlbum = albums[Math.floor(Math.random() * albums.length)].toLowerCase();
let attempts = 0;

document.getElementById('submit-button').addEventListener('click', function() {
    const input = document.getElementById('album-input').value.toLowerCase();
    attempts++;

    if (input === chosenAlbum) {
        document.getElementById('message').innerText = `You guessed it in ${attempts} attempts! The album was "${chosenAlbum}".`;
    } else {
        document.getElementById('message').innerText = `Try again!`;
    }

    updateGrid(input);
    document.getElementById('album-input').value = '';
});

function updateGrid(guess) {
    const grid = document.getElementById('album-grid');
    const row = document.createElement('div');

    for (let i = 0; i < guess.length; i++) {
        const cell = document.createElement('div');
        cell.innerText = guess[i];
        if (chosenAlbum[i] === guess[i]) {
            cell.style.backgroundColor = 'green';
        } else if (chosenAlbum.includes(guess[i])) {
            cell.style.backgroundColor = 'yellow';
        } else {
            cell.style.backgroundColor = 'gray';
        }
        row.appendChild(cell);
    }
    grid.appendChild(row);
}