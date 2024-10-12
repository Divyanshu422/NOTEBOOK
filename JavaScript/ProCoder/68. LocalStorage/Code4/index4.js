
// localStorage.clear(); -> used to clear the localStorage

const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');
const nameElement = document.querySelector('.name-tag');
const ageElement = document.querySelector('.age-tag');

//  Step 1: Create the Object
const myData = JSON.parse(localStorage.getItem('myData'))||{};


// Reflecting the value on the load of HTML page on the UI
// const storedData = JSON.parse(localStorage.getItem('myData'));

// Check if storedData is null
// if (storedData) {
//     nameElement.innerHTML = storedData.name || ''; // Set name if exists
//     ageElement.innerHTML = storedData.age || '';   // Set age if exists
// } else {
//     nameElement.innerHTML = ''; // Set to empty if no data
//     ageElement.innerHTML = '';   // Set to empty if no data
// }

nameElement.innerHTML = myData.name || '';
ageElement.innerHTML = myData.age || '';

// Storing the data and overRiding the localStorage values -> name
nameInput.addEventListener('input', function(event) {
    myData.name = event.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));

    const nameJSON =  localStorage.getItem('myData');
    const parsedName = JSON.parse(nameJSON);
    nameElement.innerHTML = parsedName.name;
});


// Storing the data and overRiding the localStorage values -> age
ageInput.addEventListener('input', function(event) {
    myData.age = event.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));

    const ageJSON =  localStorage.getItem('myData');
    const parsedage = JSON.parse(ageJSON);
    ageElement.innerHTML = parsedage.age;
});
