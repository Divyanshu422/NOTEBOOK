const imageTag = document.querySelector("img");

const button = document.querySelector("button");

// adding the event listner

button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      imageTag.src = data.message;
    });
});
