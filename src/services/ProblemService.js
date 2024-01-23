import authHeader from "./authHeader";
import axios from "axios";

const API_ENDPOINT = "http://localhost:8080/api/problems/";
const header = authHeader();

class ProblemService {
  createProblem(problemDetails) {
    console.log(header);
    return axios.post(API_ENDPOINT + "create-problem", problemDetails, {
      headers: header,
    });
  }
}

export default new ProblemService();
