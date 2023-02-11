import { actualUser } from "../../localstorage/index.js";

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', { hour: "2-digit", minute: '2-digit', hour12: false }).format(date)
}


const ChatBlockRow = (item) =>
  `
    <div class="chat-block-row ${item?.user?.uuid === actualUser().uuid ? 'reverse' : ''}">
      <div class="chat-name-date-text">
        ${item?.user?.uuid === actualUser().uuid ? 'Você' : item?.user?.name} - ${formatDate(new Date(item?.hour))}
      </div>
      <div class="chat-block">
        ${item?.message}
      </div>
    </div>
  `;

export { ChatBlockRow }