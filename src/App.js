import { Routes, Route } from 'react-router-dom';
import "@material-tailwind/react/tailwind.css";
import "./styles/output.css";
import Home from './pages';
import Error404 from './components/Error/error404';
import AboutUs from './pages/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/not-found" element={<Error404 />} />
      {/* <Navigate to="/not-found" /> */}
    </Routes>
  );
}

export default App;
