console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(eachImg => {
            const dogContainer = document.querySelector('#dog-image-container')
            const img = document.createElement('img')
            img.src = eachImg
            dogContainer.append(img)
        })
    })

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        const fullBreedArray = Object.keys(data.message)
        updateBreedList(fullBreedArray)
        const select = document.querySelector("#breed-dropdown")
        select.addEventListener('change', e => {
            dropdownLetter = e.target.value
            
            selection = fullBreedArray.filter(eachBreed => eachBreed.startsWith(dropdownLetter))
            
            updateBreedList(selection)
        })
    })
})


function updateBreedList(breedSelection) {
    const dogBreeds = document.querySelector('#dog-breeds')
    dogBreeds.textContent = ''
    breedSelection.forEach(eachBreed => {
        const newLi = document.createElement('li')
        newLi.textContent = eachBreed
        newLi.addEventListener('click', () => {
            newLi.style.color = 'red'
        })
        dogBreeds.append(newLi)
    })
}