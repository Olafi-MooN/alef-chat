import { getItemDb, createItem } from "../firebase/index.js";
import { } from "https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js";


const insertUsersInChat = async (path, data) => {
  let itemDb = await getItemDb(path);
  if (itemDb?.list) {
    itemDb.list.push(data);
  } else {
    itemDb = { list: [] };
    itemDb.list = [data];
  }
  await createItem(path, itemDb);
  localStorage.setItem('user', JSON.stringify(data));
  location.href = '/index.html';
}

export { insertUsersInChat };
