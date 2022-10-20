export function alertMessage (elClass, error) {
  const alert = document.querySelector(elClass);
    alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> ${error.message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}


export async function fetchRequest(url, request){
  const response = await fetch(url, request);
  const result = await response.json();
  return result;
  
}


export default () => console.log("utils.js");


