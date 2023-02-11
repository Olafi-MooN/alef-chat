const ProfileList = (user) => `
        <div class="profile-content-users" id="${user?.uuid}" data-profile="${JSON.stringify(user).replaceAll('"', "'")}">
          <img class="profile-image" src="${user?.image}" alt="img-profile">
          <div class="profile-info">
            <h1 class="profile-name sm">${user?.name}</h1>
            <div class="profile-status">
              <div class="profile-status-circle"></div>Online
            </div>
          </div>
        </div>
`

export {
  ProfileList
}