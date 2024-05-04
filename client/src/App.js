import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';
import AdminDashboard from './components/AdminDashboard'
import Upload from './components/Upload';
import CourseListAdmin from './components/CourseListAdmin';
import CourseDetails from './components/CourseDetails';
import CourseUpdate from './components/CourseUpdate';
import QuizHome from './components/QuizeHome';
import Questions from './components/Questions';
import EditUserDetails from './components/EditUserDetails';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { ToastContainer } from "react-toastify";
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import UserManagement from './components/UserManagement';
import AdminRegister from './components/AdminRegister';



function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem("role") || null);
  }, []);


  return (
    <div className="App">




      <NavBar />
      <ToastContainer />
      <Routes>
        {user === "admin" && (
          <>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/userManagement" element={<UserManagement />} />
            <Route path="/editUser/:userId" element={<EditUserDetails />} />
            <Route path="/adminRegister" element={<AdminRegister />} />




            <Route path="/AdminDashboard" exact element={<AdminDashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/getAllCourses" element={<CourseListAdmin />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/updateCourse/:id" element={<CourseUpdate />} />
            <Route path="/quizeHome/:id" element={<QuizHome />} />
            <Route path="/questions/:id" element={<Questions />} />
          </>
        )}
        {user === "user" && (
          <>
            <Route path="/profile" element={<UserProfile />} />

          </>
        )}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>







      {/* <Routes>

        <AdminDashboard />
        <EditUserDetails />
        <LoginPage />
        <RegisterPage />











        <Route path="/AdminDashboard" exact element={<AdminDashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/getAllCourses" element={<CourseListAdmin />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/updateCourse/:id" element={<CourseUpdate />} />
        <Route path="/quizeHome/:id" element={<QuizHome />} />
        <Route path="/questions/:id" element={<Questions />} />
      </Routes> */}
    </div>
  );
}

export default App;
