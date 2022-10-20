import {alertMessage} from "./utils.js";

const form = document.getElementById("form");

function formData(event, form) {
  event.preventDefault();
  const data = new FormData(form);
  const person = {};
  data.forEach((value, key) => {
    person[key] = value;
  });
  return JSON.stringify(person);
}

form.addEventListener("submit", (event) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData(event, form),
    redirect: "follow",
  };

  fetch("https://api-nodejs-todolist.herokuapp.com/user/register", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.token){
      sessionStorage.setItem('token', result.token)
      window.location.pathname = '/user/profile.html';
    }
  })
  .catch((error) => alertMessage(".message", error));
});
