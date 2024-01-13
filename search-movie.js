document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission and page refresh

    const searchTerm = document.getElementById('name').value;
    searchMovies(searchTerm);
});

async function searchMovies(searchTerm) {
    const apiKey = '34d89159'; // Replace with your actual API key
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;

    console.log('Fetching data from OMDb API:', apiUrl);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('data:', data);

        if (data.Search && data.Search.length > 0) {
            displayResults(data.Search);
        } else {
            displayError();
        }
    } catch (error) {
        console.error('Error fetching data from OMDb API:', error);
    }
}

function displayResults(results) {
    const resultsArea = document.getElementById('result');
    resultsArea.innerHTML = '';

    results.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `
            <p>Title: ${movie.Title}</p>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <hr>
        `;
        resultsArea.appendChild(movieElement);
    });
}

function displayError() {
    const resultsArea = document.getElementById('result');
    resultsArea.innerHTML = 'Ba baiatule esti gay?';
}