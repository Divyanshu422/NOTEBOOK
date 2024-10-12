

   const nameInput = document.querySelector('.name');
   const nameElement = document.querySelector('.name-tag');
/*
  * Applying the event Listener to the input element:
  * which event Listener? 'input' event Listener:
  * The input event listener in JavaScript is used to capture and respond to user input in real-time. This event triggers every time the value of an <input>, <textarea>, or <select> element changes, making it particularly useful for form validation, search fields, or any situation where immediate feedback is required.
*/
    // nameElement.innerText = localStorage.myName;\
    nameElement.innerText = localStorage.getItem('myName');
    nameInput.addEventListener('input', function(event) {
            //* Saving the input value to the LocalStorage
            // localStorage.myName = event.target.value;
            localStorage.setItem('myName', event.target.value);
            console.log(localStorage);
            // nameElement.innerText = event.target.value;
            nameElement.innerText = localStorage.getItem('myName');

        }
    );