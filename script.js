async function getJokes() {
    const jokeContainer = document.getElementById('joke-container');

    try 
    {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random/25');
        const jokes = await response.json();

        jokeContainer.innerHTML = '';

        jokes.forEach((joke) => {
            let jokeElement = document.createElement('div');

            jokeElement.className = 'joke';
            jokeElement.innerHTML = `<p>${joke.setup}</p><p><strong>${joke.punchline}</strong></p>`;

            jokeContainer.appendChild(jokeElement);});
    } 
    catch (error) 
    {
        jokeContainer.innerHTML = '<p>Oopsies! Couldn`t load jokes. You`ll have to get your dosage of humor later :(</p>';
        console.error('Error :( ', error);
    }
}
