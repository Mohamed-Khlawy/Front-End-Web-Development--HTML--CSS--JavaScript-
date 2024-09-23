MyID = 'vljhrB3LdUjzUxRJCsln8t28cDjenjbKm2Zn8PL04OY'

const numberOfPhotosEl = document.getElementById('input')
const errorMessageEl = document.getElementById('error-message')
const getPhotosBtn = document.getElementById('btn')
const gallery = document.getElementById('gallery')

function fetchRandomImage(numberOfPhotos) {
    let UnsplashURL = `https://api.unsplash.com/photos/random/?client_id=${MyID}&count=${numberOfPhotos}`

    fetch(UnsplashURL)
    .then((response) => 
        response.json()
    )

    .then((jsonData) => {
        gallery.innerHTML = ''

        jsonData.forEach((imageData) => {
            const imageEl = document.createElement('img')

            imageEl.src = imageData.urls.regular
            imageEl.alt = imageData.alt_description || 'Random Image'

            gallery.appendChild(imageEl)
        })
    })

    .catch((error) => 
        console.log("Error: " + error)
    )
}

getPhotosBtn.addEventListener('click', () => {
    const numberOfPhotos = +numberOfPhotosEl.value

    if (isNaN(numberOfPhotos) || numberOfPhotos < 2 || 
        numberOfPhotos > 10) 
    {
        errorMessageEl.style.display = 'block'
        numberOfPhotosEl.value = '2'
        gallery.style.display = 'none'
    }

    else {
        errorMessageEl.style.display = 'none'
        gallery.style.display = 'block'
        fetchRandomImage(numberOfPhotos)
    }
})