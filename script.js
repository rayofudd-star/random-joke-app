const jokeBtn = document.getElementById('get-joke-btn');
const jokeText = document.getElementById('joke');

jokeBtn.addEventListener('click', getJoke);

function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = `${data.setup} ... ${data.punchline}`;
    })
    .catch(error => {
      jokeText.textContent = 'Oops! Could not get a joke right now.';
    });
}