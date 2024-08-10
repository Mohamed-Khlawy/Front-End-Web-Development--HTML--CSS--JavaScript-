const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=c069cd55151dc34fc1468e984420f16b'

const IMG_PATH = 'https://image.tmdp.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=c069cd55151dc34fc1468e984420f16b&query="'

const form = document.getElementById('form')

const search = document.getElementById('search')

// Get Intial Movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)

    const data = await res.json()

    console.log(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }

    else {
        window.location.reload()
    }
})