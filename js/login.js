import { formData, fetchRequest, alertMessage, shake, getToken } from "./utils.js";

//controllo iniziale
const token = getToken();

if (token) {
  window.location.pathname = "/user/profile.html";
}

//codice
//login
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData(event, form),
    redirect: "follow",
  };

  fetchRequest(
    "https://api-nodejs-todolist.herokuapp.com/user/login",
    requestOptions
  )
    .then((result) => {
      if (result?.token) {
        sessionStorage.setItem("token", result.token);
        document.cookie = `token=${result.token}; path=/`;
        window.location.pathname = "/user/profile.html";
      }
    })
    .catch((error) => {
      alertMessage(".message", error);
      shake(".container-fluid");
    });
});
