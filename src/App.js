import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Calendar from "./components/Calendar/Calendar";
import Problems from "./pages/Problems/Problems";
import Profile from "./pages/Profile/Profile";
import Contest from "./pages/Contest/Contest";
import Solution from "./pages/Solution/Solution";
import ProblemEditor from "./pages/ProblemEditor/ProblemEditor";
import Community from "./pages/Community/Community";
import PostEditor from "./pages/PostEditor/PostEditor";
import CommunityPost from "./pages/CommunityPost/CommunityPost";
import Problem from "./pages/Problem/Problem";

function App() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "";
  });
  const darkMode = () => {
    setTheme((prevState) => {
      if (prevState === "") return "theme-dark";
      else return "";
    });
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme} App max-h-screen overflow-y-scroll`}>
      <Router>
        <Navbar darkMode={darkMode} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/community" element={<Community />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/create-problem" element={<ProblemEditor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/problems/:id" element={<Problem />} />
          <Route path="/createpost" element={<PostEditor />} />
          <Route path="/communitypost" element={<CommunityPost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
