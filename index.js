let randomson = Math.floor(Math.random() * 100);

let body = document.querySelector("body");
let h1 = document.createElement("h1");

h1.textContent = randomson;

body.appendChild(h1);

body.style = "background-color: black;"
h1.style = "color: white";