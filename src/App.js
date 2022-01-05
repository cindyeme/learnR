import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/global.css';
import "./styles/output.css";
import Home from './pages';
import AboutUs from './pages/About';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
import RequestToken from './pages/password-recovery/requestToken';
import ResetPassword from './pages/password-recovery/newPassword';
import TeacherForm from './pages/teacherForm';
import Courses from './pages/Courses';
import BecomeATeacher from './pages/BecomeATeacher';
import TeacherDetails from './pages/teacher-details';

function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    // focusHandling('outline');
  }, [location.pathname]);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<RequestToken />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/become-a-teacher" element={<BecomeATeacher />} />
      <Route path="/teachers-form" element={<TeacherForm />} />
      <Route path="/teacher-details" element={<TeacherDetails />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/server-error" element={<Error500 />} />
      {/* <Route path="" element={<Navigate to="/not-found" />} /> */}
    </Routes>
  );
}

export default App;
