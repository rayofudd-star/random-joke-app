const jokeText = document.getElementById('joke');
const buttons = document.querySelectorAll('.mood-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    getJoke(mood);
  });
});

function getJoke(mood) {
  jokeText.textContent = 'Loading...';

  if (mood === 'dad') {
    // Fetch a Dad Joke from icanhazdadjoke.com
    fetch('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        jokeText.textContent = data.joke;
      })
      .catch(() => {
        jokeText.textContent = 'Oops! Could not get a dad joke right now.';
      });
  } else {
    // Official Joke API for other moods
    fetch(`https://official-joke-api.appspot.com/jokes/${mood}/random`)
      .then(response => response.json())
      .then(data => {
        // API returns an array for these endpoints
        const joke = data[0];
        jokeText.textContent = `${joke.setup} ... ${joke.punchline}`;
      })
      .catch(() => {
        jokeText.textContent = `Oops! Could not get a ${mood} joke right now.`;
      });
  }
}
