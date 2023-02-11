import { actualUser } from "../localstorage/index.js"

const isAuth = () => {
  if (!actualUser()?.uuid) {
    location.href = "/login.html"
  }
}

export {
  isAuth
}