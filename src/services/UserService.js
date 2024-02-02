import TokenService from "./TokenService";
import axios from "axios";

class UserService {
  signIn(userDetails) {
    return axios
      .post("http://localhost:8080/api/auth/signin", userDetails)
      .then((res) => {
        if (res.data.accessToken) {
          TokenService.setUser(res.data);
        }
      })
      .catch((error) => {
        //later
      });
  }

  signUp(userDetails) {
    return axios
      .post("http://localhost:8080/api/auth/signup", userDetails)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        //later
      });
  }

  verifyUserEmail(token) {
    return axios
      .post("http://localhost:8080/api/auth/verify/" + token)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        //later
      });
  }

  logOut(userId) {
    return axios
      .post(`http://localhost:8080/api/auth/signout/${userId}`)
      .then((res) => {
        console.log(userId);
        TokenService.removeUser();
      })
      .catch((error) => {
        //later
      });
  }

  getCurrentUser() {
    return TokenService.getUser();
  }
}

export default new UserService();
