'use strict';

// * Step 1: Selecting all the elements at the top of the file and storing in the variables

const modal = document.querySelector('.modal'); // . -> dot is used for the class
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');

// * sTEP 3: Refactoring the code
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Step 2: Looping over the array -> using for loop
for (let i = 0; i < openBtns.length; i++) {
  openBtns[i].addEventListener('click', openModal);
}

//* adding the event listener to the close button
closeBtn.addEventListener('click', closeModal);

// using the callBack function
overlay.addEventListener('click', () => closeModal());

/*
    * Q: What is nodeList in the javaScript
    * Q: Diference btw textContent vs innerHTML
    * Q: Diference btw querySelector vs querySelectorAll
    * Q: what is classList in the javaScript


*/
