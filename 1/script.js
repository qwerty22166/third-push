let email = document.querySelector('#email');
let button = document.querySelector('#button');

// button.onclick = () => {
//     if(email === matches(/\w[@]\w[.]\w/)){
//         alert("Вы успешно зарегистрировались");
//     } else {
//         alert("Ошибка");
//     }
// }

function regex() {
    if(email === matches(/\w(@)\w[.]\w/)){
      alert("Вы успешно зарегистрировались");
    } else {
      alert("Ошибка");
    }
}

button.addEventListener('click', regex)