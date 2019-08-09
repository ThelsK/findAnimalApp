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

const user = {
    name: ""
}

function initialize() {
    randomImagePositions()
    addAllAnimalImages()
    updateItems()
}

function randomImagePositions() {
    for (let i = 0; i < images.length; i++) {
        let bottom
        let left
        let overlap = true
        while (overlap) {
            bottom = getRandomInt(0, 90)
            left = getRandomInt(0, 70)
            overlap = false

            for (let j = 0; j < i; j++) {
                if (bottom >= images[j].bottom[0] - 5 && bottom <= images[j].bottom[0] + 5) {
                    if (left >= images[j].left[0] - 5 && left <= images[j].left[0] + 5) {
                        overlap = true
                    }
                }
            }
        }
        images[i].bottom = []
        images[i].bottom[0] = bottom
        images[i].left = []
        images[i].left[0] = left
    }
}

function getRandomInt(min, max) {
    let rng = Math.random() * (1 + max - min)
    rng = Math.floor(rng) - min
    return rng
}

function addAnimalImage(image) {
    const main = document.getElementById("searchField")
    const img = document.createElement("img")
    img.classList.add("animalImage")
    img.alt = image.name
    img.src = image.src
    img.style.bottom = `${image.bottom[0]}vh`
    img.style.left = `${image.left[0]}vw`
    img.addEventListener("click", function () { addToFoundItems(this) })
    main.appendChild(img)
}

function addAllAnimalImages() {
    for (let i = 0; i < images.length; i++) {
        addAnimalImage(images[i])
    }
}

function addToFoundItems(img) {
    if (!foundItems.includes(img)) {
        foundItems.push(img)
        displayInFooter()
        updateItems()
        checkVictory()
    }
}

function displayInFooter() {
    const foundItemsDiv = document.getElementById('foundItems')
    for (let i = 0; i < foundItems.length; i++) {
        let img = foundItems[i]
        img.classList.remove("animalImage")
        img.classList.add("foundImage")
        img.style.bottom = ""
        img.style.left = ""
        foundItemsDiv.appendChild(img)
    }
}

function checkVictory() {
    if (images.length == foundItems.length) {
        if (user.name) {
            alert(`Congratulations ${user.name}!\n\nYou have found all ${images.length} images!`)
        }
        else {
            alert(`Congratulations!\n\nYou have found all ${images.length} images!`)
        }
    }
}

function submitName() {
    let name = document.getElementById("name").value
    name = validateName(name)
    if (!name) {
        return
    }
    user.name = name;
    updateItems()
    const form = document.getElementById("nameForm")
    form.classList.add("hide")
}

function validateName(name) {

    name = name.trim()

    if (name == "") {
        alert("Please enter your name!")
        return
    }

    name = name[0].toUpperCase() + name.slice(1)
    return name
}

function updateItems() {
    const foundTitle = document.getElementById("foundTitle")

    if (user.name) {
        foundTitle.innerText = `${user.name} has found ${foundItems.length} of ${images.length} animals!`
    }
    else {
        foundTitle.innerText = `You have found ${foundItems.length} of ${images.length} animals!`
    }
}