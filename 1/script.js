const email = document.querySelector('#email');
const button = document.querySelector('#button');

button.onclick = () => {
    if(email == matches(/\w[@]\w\w\w\w\w[.]\w\w\w/)){
        alert("Вы успешно зарегистрировались")
    } else {
        alert("Ошибка")
    }
}