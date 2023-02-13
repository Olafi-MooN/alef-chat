import { getUserList } from "../chat/index.js"
import { ProfileList } from "../components/profile-list/ProfileList.js";
import { onListEventMessage } from "../firebase/index.js";
import { actualUser } from "../localstorage/index.js";
import { cryptoRelationUUID } from "../utils/index.js";
import { buttonActionSendMessage, getMessages, keyEnterActionSendMessage, listMessagesRender, openChat, userSelectedChat } from "./chat.js";


const searchMessages = (cryptoPathRelation) => {
  getMessages(cryptoPathRelation).then((messages) => {
    listMessagesRender(messages);
  });
}

const getUserFirebase = async (callback) => {
  // Pegar usuarios do firebase
  const listUsersFirebase = await getUserList('users')
  const listUsers = document.querySelector('.content-users-list');
  const filtered = listUsersFirebase?.list?.filter(x => x?.uuid !== actualUser()?.uuid).map((user) => ProfileList(user)).join('');
  listUsers.innerHTML = filtered;
  if (callback) callback();
};

var userSelected = '';
const selectUserList = (removeSelected) => {
  // Adicionar evento de seleção de click aos perfis listados
  const listUsersEach = document.querySelectorAll('.profile-content-users');

  listUsersEach.forEach(user => {
    user.addEventListener('click', async (event) => {
      document.querySelector('.chat-body').innerHTML = '';
      userSelected = user?.id;
      user.classList.add('selected');
      const datasetUser = JSON.parse(user.dataset.profile.replaceAll("'", '"'));
      const cryptoPathRelation = cryptoRelationUUID(actualUser()?.uuid, datasetUser?.uuid);

      openChat();
      selectUserList();
      userSelectedChat(datasetUser);

      searchMessages('chat/' + cryptoPathRelation);

      buttonActionSendMessage(cryptoPathRelation, actualUser());
      keyEnterActionSendMessage(cryptoPathRelation, actualUser())

      onListEventMessage(`chat/${cryptoPathRelation}`, searchMessages)
    });
    if (user.id !== userSelected) {
      user.classList.remove('selected');
    }
    if (removeSelected) {
      user.classList.remove('selected');
    }
  });
}

const openUserList = () => {

}

export { selectUserList, getUserFirebase };