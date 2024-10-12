

const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');
const nameElement = document.querySelector('.name-tag');
const ageElement = document.querySelector('.age-tag');

nameElement.innerText = localStorage.getItem('myName');
nameInput.addEventListener('input', function(event) {
         localStorage.setItem('myName', event.target.value);
         nameElement.innerText = localStorage.getItem('myName');
    }
);

ageElement.innerText = localStorage.getItem('myAge');
ageInput.addEventListener('input', function(event) {
        localStorage.setItem('myAge', event.target.value);
        ageElement.innerText = localStorage.getItem('myAge');
    }
);