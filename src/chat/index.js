import { getItemDb, createItem } from "../firebase/index.js";
import { } from "https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js";


const insertMessageInChat = async (path, data) => {
  const itemDb = await getItemDb(path);
  if (itemDb) {
    if (itemDb?.messages) {
      itemDb?.messages.push(data);
    } else {
      itemDb.messages = [data];
    }
    createItem(path, itemDb);
  } else {
    createItem(path, {
      chatId: uuid.v4(),
    }).then(() => insertMessageInChat(path, data));
  }
}

const getUserList = async (path) => await getItemDb(path);

export {
  getUserList,
  insertMessageInChat
};
