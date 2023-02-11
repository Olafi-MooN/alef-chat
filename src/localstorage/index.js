const actualUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

const setActualUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export {
  actualUser,
  setActualUser
}