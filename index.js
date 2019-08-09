const images = [
    {
        name: "Bird",
        src: "https://svgsilh.com/svg/1088589.svg",
    },
    {
        name: "Elephant",
        src: "https://svgsilh.com/svg/945577.svg",
    },
    {
        name: "Giraffe",
        src: "https://svgsilh.com/svg/1295077.svg",
    },
    {
        name: "Owl",
        src: "https://svgsilh.com/svg/356553.svg",
    },
    {
        name: "Dove",
        src: "https://svgsilh.com/svg/1966959.svg",
    },
    {
        name: "Hedgehog",
        src: "https://svgsilh.com/svg/2024394.svg",
    },
    {
        name: "Bear",
        src: "https://svgsilh.com/svg/1010286.svg",
    },
    {
        name: "Tortoise",
        src: "https://svgsilh.com/svg/47047.svg",
    },
    {
        name: "Camel",
        src: "https://svgsilh.com/svg/1295337.svg",
    },
    {
        name: "Snail",
        src: "https://svgsilh.com/svg/1292917.svg",
    },
    {
        name: "Horse",
        src: "https://svgsilh.com/svg/47878.svg",
    },
    {
        name: "Fox",
        src: "https://svgsilh.com/svg/1295378.svg",
    },

]

const foundItems = []

function getRandomInt(min, max) {
    let rng = Math.random() * (1 + max - min)
    rng = Math.floor(rng) - min
    return rng
}

function addAnimalImage(image) {
    const main = document.getElementById("searchField")
    const img = document.createElement("img")
    img.alt = image.name
    img.src = image.src
    img.classList.add("animalImage")
    img.style.bottom = `${getRandomInt(0, 30)}rem`
    img.style.left = `${getRandomInt(0, 60)}rem`
    img.addEventListener("click", function() {addToFoundItems(this)})
    main.appendChild(img)
}

function addAllAnimalImages() {
    for (let i = 0; i < images.length; i++) {
        addAnimalImage(images[i])
    }
}

function initialize() {
    addAllAnimalImages()
}

function addToFoundItems(img) {
    if (!foundItems.includes(img)) {
        foundItems.push(img)
        console.log(foundItems)
    }
}