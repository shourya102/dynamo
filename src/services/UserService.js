import axios from "axios";

const API_ENDPOINT = "http://localhost:8080/api/auth";

class UserService {
  signIn(userDetails) {
    return axios.post(API_ENDPOINT + "/signin", userDetails);
  }

  signUp(userDetails) {
    return axios.post(API_ENDPOINT + "/signup", userDetails);
  }

  logOut() {
    localStorage.removeItem("session");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("session"));
  }
}

export default new UserService();
