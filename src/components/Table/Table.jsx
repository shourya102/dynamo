import React, { useEffect } from "react";
import "./Table.css";
import { AiOutlineSolution } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Table(props) {
  const [problemData, setProblemData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/problems/getallproblem")
      .then((response) => {
        setProblemData(response.data);
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="flex [&>*:nth-child(even)]:bg-skin-base-2 [&>*:nth-child(odd)] flex-col mt-8 w-full">
      <div className="flex py-3 space-x-4 border-b border-skin-border-2">
        <div className="w-12 pl-2">Id</div>
        <div className="w-80">Title</div>
        <div className="w-28">Difficulty</div>
        <div className="w-28">Solution</div>
        <div className="w-28">Acceptance</div>
        <div className="w-28">Status</div>
      </div>
      {problemData.map((problem, index) => (
        <div className="flex py-3 space-x-4">
          <div className="w-12 pl-2">1</div>
          <Link to={`/problems/${problem.id}`} className="w-80">
            {problem.name}
          </Link>
          <div className="w-28">{problem.difficulty}</div>
          <div className="w-28">
            <AiOutlineSolution size={25} />
          </div>
          <div className="w-28">
            {problem.successfullAttempts / problem.numberOfAttempts}
          </div>
          <div className="w-28">Unsolved</div>
        </div>
      ))}
    </div>
  );
}
