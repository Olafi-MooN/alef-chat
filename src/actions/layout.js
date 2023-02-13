import { setActualImageConfig, uploadImage } from "./upload-image.js";

const openMenu = () => {
  const menuBtn = document.querySelector('.menu-btn');
  const contentUsers = document.querySelector('.content-users');
  const containerHome = document.querySelector('.container-home');

  menuBtn.addEventListener('click', () => {
    contentUsers.classList.toggle('no-active');
    containerHome.classList.toggle('no-active-participants');
  })
}

const openModal = () => {
  const settingsBtn = document.querySelector('.settings-btn');
  const openModal = document.querySelector('.modal');

  settingsBtn.addEventListener('click', () => {
    openModal.classList.toggle('active');

    if (openModal.classList.contains('active')) {
      uploadImage();
      setActualImageConfig();

      const closeModalBtn = document.querySelector('.close-modal');
      closeModalBtn.addEventListener('click', () => {
        openModal.classList.toggle('active');
      });
    }
  })


}

export {
  openMenu,
  openModal
}