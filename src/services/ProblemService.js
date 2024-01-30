import Api from "./Api";

class ProblemService {
  createProblem(problemDetails) {
    return Api.post("/problems/create-problem", problemDetails);
  }
}

export default new ProblemService();
