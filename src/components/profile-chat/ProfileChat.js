const ProfileChat = (user) => `
    <img class="profile-image" src="${user.image}" alt="img-profile" data-profile="${JSON.stringify(user).replace("'", '"')}">
    <div class="profile-info">
      <h1 class="profile-name">${user.name}</h1>
      <div class="profile-status">
        <div class="profile-status-circle"></div>Online
      </div>
    </div>
`;

export {
  ProfileChat
};
