const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}
const displayDog = (dogList) => {
    const main = document.getElementById('main')
    const first10Data = dogList.slice(0, 10);
    for (const dog of first10Data) {
        const div = document.createElement('div');
        div.classList.add('col-md-4')
        div.innerHTML = `
        <img width="400px" height="250px" src="${dog.image.url}">
        <h2>${dog.name}</h2>
        <p>${dog.temperament}</p>
        <h4>${dog.weight.imperial}</h4>
        `
        console.log(dog);
        main.appendChild(div)
    }
}