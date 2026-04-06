import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css-files/footer.css";
import "./assets/css-files/navbarNew.css";
import "./assets/css-files/sidebar.css";
import "./assets/css-files/contact.css";
import "./assets/css-files/about.css";
import "./assets/css-files/projectHero.css";
import "./assets/css-files/companiesList.css";
import "./assets/css-files/JobList.css";
import "./assets/css-files/register.css";
import "./assets/css-files/applyform.css";
// import MyHeader from "./components/MyHeader";
import NavbarNew from "./components/NavbarNew";
// import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// import Todo from "./components/use-state/Todo";
// import ListshowAPI from "./components/use-effect/ListshowAPI";

import Admin from "./components/Admin";
import ProjectHero from "./components/ProjectHero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import CompaniesList from "./pages/CompaniesList";
import JobList from "./pages/JobList";
import NotFound from "./pages/NotFound";
import StudentDets from "./pages/StudentDets";
import ViewStud from "./pages/ViewStud";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ApplyForm from "./pages/ApplyForm";
import Task from "./components/use-effect/task";
import UserForm from "./pages/UserForm";
import User from "./pages/User";
import CandidateProfile from "./pages/CandidateProfile";
import CompanyProfile from "./pages/CompanyProfile";
import InterviewForm from "./pages/InterviewForm";
import JobPost from "./pages/JobPost";
import Dashboard from "./pages/candidate/Dashboard";
import Interviews from "./pages/candidate/Interviews";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarNew></NavbarNew>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/studentDets" element={<StudentDets />} />
        <Route path="/viewStud/:id" element={<ViewStud />} />
        <Route path="/companiesList" element={<CompaniesList />} />
        <Route path="/jobList" element={<JobList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/applyForm" element={<ApplyForm />} />
        <Route path="/task" element={<Task />} />
        <Route path="/userForm" element={<UserForm />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/candidateProfile" element={<CandidateProfile />} />
        <Route path="/companyProfile" element={<CompanyProfile />} />
        <Route path="/interviewForm" element={<InterviewForm />} />
        <Route path="/jobPost" element={<JobPost />} />
        <Route
          path="/candidate/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidate/interviews"
          element={
            <ProtectedRoute>
              <Interviews />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* <MyHeader></MyHeader>
      <Todo></Todo>
      <ListshowAPI></ListshowAPI> */}

      {/* <ProjectHero></ProjectHero> */}
      {/* <Sidebar></Sidebar> */}
      <Footer></Footer>
    </>
  );
}

export default App;
