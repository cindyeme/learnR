import { Routes, Route } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import "./styles/output.css";
import Home from './pages';
// import AboutUs from './pages/About';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import SignIn from './pages/Sign-in';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about-us" element={<AboutUs />} /> */}
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/server-error" element={<Error500 />} />
      {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
    </Routes>
  );
}

export default App;
