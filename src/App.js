import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TutorProfilesPage from './pages/TutorProfilesPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import TestimonialPage from './pages/TestimonialPage';
import PricingPage from './pages/PricingPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
import LiveChat from './pages/LiveChatPage';
import StudentDashboard from './components/StudentDashboard';  
import TeacherDashboard from './components/TeacherDashboard';
import ParentDashboard from './components/ParentDashboard';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

const App = () => {

  return (
    <Router>
      <Navbar /> 

      <Routes>
        {/* Public Routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/tutors" element={<TutorProfilesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team" element={<MeetTheTeamPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} /> {/* Fixed the missing '>' */}

        {/* Protected Routes - Dashboard (Role-Based) */}
        <Route path="/student-dashboard/home" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard/home" element={<TeacherDashboard />} />
        <Route path="/parent-dashboard/home" element={<ParentDashboard />} />

        {/* Live Chat */}
        <Route path="/live-chat" element={<LiveChat />} /> 
      </Routes>

      <Footer /> {/* Render the Footer at the bottom */}
    </Router>
  );
};

export default App;
