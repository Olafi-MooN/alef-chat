// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { } from "https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2qBJrpM-KMBz4AneEyXEjI7wOc_kKLEs",
  authDomain: "chat-teste-72801.firebaseapp.com",
  databaseURL: "https://chat-teste-72801-default-rtdb.firebaseio.com",
  projectId: "chat-teste-72801",
  storageBucket: "chat-teste-72801.appspot.com",
  messagingSenderId: "634268036773",
  appId: "1:634268036773:web:bdb02cde5ec0cdfc07e74c",
  measurementId: "G-446DTT7Q9Z"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);


const getItemDb = async (path) => {
  const snapshot = await get(child(dbRef, path));
  if (snapshot.exists()) {
    return snapshot.val()
  }
}

const createItem = async (path, data) => set(ref(db, path), data);


const onListEventMessage = async (path, callback) => {
  const starCountRef = ref(db, path);
  onValue(starCountRef, async (snapshot) => {
    await callback(path);
  });
}

export { getItemDb, createItem, onListEventMessage }