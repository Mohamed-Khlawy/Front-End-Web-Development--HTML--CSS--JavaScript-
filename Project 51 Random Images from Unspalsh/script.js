let clientID = "dKgFE3t66HaZZhX6rlW_vE7BvffB97aA9n80uehTe7Q"
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`

let imageEl1 = document.getElementById('unsplash-image-one')
let imageEl2 = document.getElementById('unsplash-image-two')

let imageLink1 = document.getElementById('image-link-one')
let imageLink2 = document.getElementById('image-link-two')

let creator1 = document.getElementById('creator-one')
let creator2 = document.getElementById('creator-two')


fetchRandomImages()

function fetchRandomImages() {
    // First Image
    fetch(endpoint)
        .then((response) => 
            response.json()
        )

        .then((jsonData) => {
            imageEl1.src = jsonData.urls.regular
            imageLink1.setAttribute('href', jsonData.links.html)
            creator1.innerText = jsonData.user.name
            creator1.setAttribute('href', jsonData.user.portfolio_url)
        })

        .catch((error) => 
            console.log("Error: " + error)
        )

    // Second Image
    fetch(endpoint)
        .then((response) => 
            response.json()
        )

        .then((jsonData) => {
            imageEl2.src = jsonData.urls.regular
            imageLink2.setAttribute('href', jsonData.links.html)
            creator2.innerText = jsonData.user.name
            creator2.setAttribute('href', jsonData.user.portfolio_url)
        })

        .catch((error) => 
            console.log("Error: " + error)
        )
}