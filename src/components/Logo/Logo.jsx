import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link
        to="/learnR"
        className="flex space-x-1 justify-center"
        aria-label="LearnR"
      >
        <img src={logo} alt="logo" className="img-fluid w-20 h-20" />
        <h3 className="flex items-center uppercase">
          <span className="text-2xl font-bold text-grayish-900">Learn</span>{" "}
          <span className="text-primary-amber text-2xl font-bolder">R</span>
        </h3>
      </Link>
    </div>
  );
}
