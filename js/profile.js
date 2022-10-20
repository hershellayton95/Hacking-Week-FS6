import {alertMessage} from "./utils.js";

//controllo iniziale
const token = sessionStorage.getItem('token');

if(!token){
  window.location.pathname = "/user/login.html";
}

//codice
const logout = document.getElementById("logout");
const deleteUser = document.getElementById("delete-user");

const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api-nodejs-todolist.herokuapp.com/user/me", requestOptions)
  .then(response => response.json())
  .then(result => {
    document.getElementById('form-email').value = result.email;
    document.getElementById('form-name').value = result.name;
    document.getElementById('form-age').value = result.age;

    // si può fare un ciclo for?
})
  .catch(error => console.log('error', error));

logout.addEventListener("click", (event) => {
  
  event.preventDefault();

  const requestLogout = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api-nodejs-todolist.herokuapp.com/user/logout", requestLogout)
    .then(() => {
      sessionStorage.removeItem("token");
      window.location.href = `${window.location.origin}/user/login.html`;
    })
    .catch(error => console.log('error', error));
})

deleteUser.addEventListener("click", (event) => {
  
  event.preventDefault();

  const requestDelete = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api-nodejs-todolist.herokuapp.com/user/me", requestDelete)
    .then(() => {
      sessionStorage.removeItem("token");
      window.location.href = `${window.location.origin}/user/login.html`;
    })
    .catch(error => alertMessage(".message", error));
})