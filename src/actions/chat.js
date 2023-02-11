import { ProfileChat } from "../components/profile-chat/ProfileChat.js";
import { ChatBlockRow } from "../components/chat-block-row/ChatBlockRow.js";
import { selectUserList } from "./user-list.js";
import { getItemDb } from "../firebase/index.js";
import { insertMessageInChat } from "../chat/index.js";

const closeChat = () => {
  const close = document.querySelector('.close');
  const containerChat = document.querySelector('.container-chat');
  close.addEventListener('click', () => {
    containerChat.classList.remove('active');
    selectUserList(true);
  })
}

const openChat = () => {
  const containerChat = document.querySelector('.container-chat');
  containerChat.classList.add('active');
}

const userSelectedChat = (profile) => {
  document.querySelector('.profile').innerHTML = ProfileChat(profile);
}

const getMessages = async (path) => {
  const messages = await getItemDb(path);
  return messages;
}

const getInputChat = () => {
  const inputChat = document.querySelector('.chat-input');
  return inputChat;
}

const buttonActionSendMessage = (path, user) => {
  const buttonSendChat = document.querySelector('.chat-send-button');
  const inputChat = getInputChat();

  buttonSendChat.addEventListener('click', () => {
    const messageInput = inputChat.value;
    const data = { user, message: messageInput, hour: String(new Date()) };
    if (messageInput) {
      insertMessageInChat(`chat/${path}`, data);
      inputChat.value = '';
    }
  })
}

const keyEnterActionSendMessage = (path, user) => {
  const inputChat = getInputChat();

  inputChat.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const messageInput = inputChat.value;
      const data = { user, message: messageInput, hour: String(new Date()) };
      if (messageInput) {
        insertMessageInChat(`chat/${path}`, data);
        inputChat.value = '';
      }
    }
  })
}


const listMessagesRender = (chat) => {
  const chatBody = document.querySelector('.chat-body');
  if (chat?.messages) {
    chatBody.innerHTML = chat.messages.map((message) => ChatBlockRow(message)).join('');
    chatBody.scrollTop += chatBody.clientHeight;
  }
}


export {
  closeChat,
  openChat,
  userSelectedChat,
  getMessages,
  buttonActionSendMessage,
  getInputChat,
  keyEnterActionSendMessage,
  listMessagesRender
}