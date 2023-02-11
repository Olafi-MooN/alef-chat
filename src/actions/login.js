import { insertUsersInChat } from "../login/index.js";

const login = () => {
  const name = document.querySelector('#login-name');
  const buttonLogin = document.querySelector('#button-login');

  buttonLogin.addEventListener('click', () => {
    const user = {
      uuid: uuid.v4(),
      name: name.value,
      image: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 20)}.jpg`,
    }
    insertUsersInChat('users', user);
  });

}

window.addEventListener('load', login)