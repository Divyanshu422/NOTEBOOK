
// localStorage.clear(); -> used to clear the localStorage

const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');
const nameElement = document.querySelector('.name-tag');
const ageElement = document.querySelector('.age-tag');

//  Step 1: Create the Object
const myData = {
    name: '',
    age:  '',
}



// Reflecting the value on the load of html page on the UI
const storedData = JSON.parse(localStorage.getItem('myData'));
console.log(storedData);
nameElement.innerHTML = storedData.name;
ageElement.innerHTML = storedData.age;


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
