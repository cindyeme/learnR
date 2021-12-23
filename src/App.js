import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import "./styles/output.css";
import Home from './pages';
// import AboutUs from './pages/About';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';
import RequestToken from './pages/password-recovery/requestToken';
import ResetPassword from './pages/password-recovery/newPassword';
import BecomeATeacher from './pages/BecomeATeacher';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about-us" element={<AboutUs />} /> */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<RequestToken />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/become-a-teacher" element={<BecomeATeacher />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/server-error" element={<Error500 />} />
      {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
    </Routes>
  );
}

export default App;
