export function formData(event, form) {
  event.preventDefault();
  const data = new FormData(form);
  const person = {};
  data.forEach((value, key) => {
    person[key] = value;
  });
  return JSON.stringify(person);
}

export async function fetchRequest(url, request) {
  const response = await fetch(url, request);
  let result = "";

  if (response.ok) {
    result = await response.json();
  } else {
    result = await response.json().then((error) => {
      throw new Error(error);
    });
  }
  return result;
}

export function alertMessage(elClass, error) {
  const alert = document.querySelector(elClass);
  alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> ${error.message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

export function shake(elementClass) {
  const shake = document.querySelector(elementClass);
  shake.classList.add("shake");
  setTimeout(() => {
    shake.classList.remove("shake");
  }, 1000);
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default () => console.log("utils.js");
