import { fetchRequest, alertMessage, shake, getCookie } from "./utils.js";

//controllo iniziale
if(!sessionStorage.token && getCookie("token")){
  sessionStorage.setItem("token", getCookie("token"))
} else if(sessionStorage.token && !getCookie("token")){
  sessionStorage.removeItem("token");
}

const token = sessionStorage.getItem("token");

if (!token){
    window.location.pathname = "/user/login.html";
}

//codice
const logout = document.getElementById("logout");
const deleteUser = document.getElementById("delete-user");

//get info
const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetchRequest(
  "https://api-nodejs-todolist.herokuapp.com/user/me",
  requestOptions
)
  .then((result) => {
    document.getElementById("form-email").value = result.email;
    document.getElementById("form-name").value = result.name;
    document.getElementById("form-age").value = result.age;
  })
  .catch((error) => console.log("error", error));



//logout
logout.addEventListener("click", (event) => {
  event.preventDefault();

  const requestLogout = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetchRequest(
    "https://api-nodejs-todolist.herokuapp.com/user/logout",
    requestLogout
  )
    .then(() => {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      sessionStorage.removeItem("token");
      window.location.href = `${window.location.origin}/user/login.html`;
    })
    .catch((error) => {
      alertMessage(".message", error);
      shake(".container-fluid");
    });
});


//delete
deleteUser.addEventListener("click", (event) => {
  event.preventDefault();

  const requestDelete = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetchRequest(
    "https://api-nodejs-todolist.herokuapp.com/user/me",
    requestDelete
  )
    .then(() => {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      sessionStorage.removeItem("token");
      window.location.href = `${window.location.origin}/user/login.html`;
    })
    .catch((error) => {
      alertMessage(".message", error);
      shake(".container-fluid");
    });
});
