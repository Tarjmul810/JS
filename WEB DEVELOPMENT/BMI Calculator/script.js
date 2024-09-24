const form = document.getElementById('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultsElement = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (height === '' || weight === '' || isNaN(height) || isNaN(weight) || height == 0 || weight == 0) {
        resultsElement.innerHTML = `<span>Please enter valid numbers.</span>`;
    } else {
        const bmi = weight / (height * height).toFixed(2)
        resultsElement.innerHTML = `<span>${bmi}</span>`
        return;
    }


})

