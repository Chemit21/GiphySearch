const API_KEY = 'jg8zNA5XKVxETX1lMK3pSzq1Hg7pxnBY'; // Declare API_KEY only once
const Results_Container = document.getElementById('results');

async function searchGifs() {
    const query = document.getElementById('search-input').value;
    if (!query) {
        alert('Please enter a search term');
        return;
    }

    Results_Container.innerHTML = '';

    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=10`
        );

        if (!response.ok) throw new Error('Failed to fetch Gifs');

        const { data } = await response.json();
        displayGifs(data);
    } catch (error) {
        console.error('Error fetching Gifs:', error);
        alert('Failed to fetch Gifs. Please try again later.');
    }
}
function displayGifs(gifs) {
    if (gifs.length === 0) {
        Results_Container.innerHTML = '<p>No results found</p>';
        return;
    }
    gifs.forEach((gif) => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        Results_Container.appendChild(img);
    });
}