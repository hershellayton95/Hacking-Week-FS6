const token = sessionStorage.getItem('token');

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
