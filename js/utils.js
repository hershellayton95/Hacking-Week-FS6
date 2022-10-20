export function alertMessage (elClass, error) {
  const alert = document.querySelector(elClass);
    alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> ${error.message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

export function shake (elementClass) {
  const shake = document.querySelector(elementClass);
  shake.classList.add('shake');
    setTimeout(() => {
      shake.classList.remove('shake');
    }, 1000);
}


export async function fetchRequest(url, request){
  const response = await fetch(url, request);
  const result = "";
  
  if(response.ok){
    result = await response.json();
  } else {
    result = await response.json()
    .then((error) => {
      throw new Error(error);
    })
  }
  return result;
}


export default () => console.log("utils.js");


