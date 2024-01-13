document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission and page refresh

    const searchTerm = document.getElementById('searchQuerry').value;
    searchMovies(searchTerm);
});

async function searchMovies(searchTerm) {
    const apiKey = '34d89159';
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.Search && data.Search.length > 0) {
            displayResults(data.Search);
        } else {
            displayError();
        }
    } catch (error) {
        displayError();
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
    resultsArea.innerHTML = '404 Not Found <]:3';
}