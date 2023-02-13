import { createItem, getItemDb } from "../firebase/index.js";
import { actualUser, setActualUser } from "../localstorage/index.js";

async function getBase64(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  })
}


const uploadImage = async () => {
  const imageInputFile = document.querySelector('.image-input-file');
  const imageConfigEditFile = document.querySelector('.image-config-edit');
  imageInputFile.addEventListener('change', async (event) => {
    const base64File = await getBase64(event.target.files[0]);
    imageConfigEditFile.style.backgroundImage = `url(${base64File})`;

    let users = await getItemDb('users');
    users = users.list.map(x => {
      if (x.uuid === actualUser().uuid) {
        x.image = base64File;
        setActualUser(x);
      }
      return x;
    })

    createItem('users', { list: users });
  })
}

const setActualImageConfig = () => {
  const imageConfigEdit = document.querySelector('.image-config-edit');
  imageConfigEdit.style.backgroundImage = `url(${actualUser().image})`;
}

export {
  uploadImage,
  setActualImageConfig
}