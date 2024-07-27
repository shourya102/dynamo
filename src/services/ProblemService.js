import Api from "./Api";

class ProblemService {
  createProblem(problemDetails) {
    return Api.post("/problems/create-problem", problemDetails);
  }

  getProblems(problems) {
    return Api.get("/problems/get", problems);
  }
}

export default new ProblemService();
