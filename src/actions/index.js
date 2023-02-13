import { getItemDb } from "../firebase/index.js";
import { isAuth } from "./auth.js";
import { closeChat } from "./chat.js";
import { openMenu, openModal } from "./layout.js";
import { getUserFirebase, selectUserList } from "./user-list.js";

window.addEventListener('load', () => {
  isAuth();
  getUserFirebase(selectUserList);
  closeChat();
  openMenu();
  openModal();
})