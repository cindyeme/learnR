import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Input, PasswordInput } from "../components/utils/Textfields";
import Button from "../components/Button/Button";
import logo from '../assets/img/logo.png';


const SignIn = ({ loadState }) => {

  // Form Processing Using Formik - Yup for form validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid Email Address.")
        .required("Email Is Required."),

      password: Yup.string()
        .min(6, "Password Must be 6 characters or more")
        .required("Password Is Required"),
    }),

    onSubmit: (e) => {
      e.preventDefault();
    },
  });

  return (
    <section>
      <div className="relative transform translate-y-12 px-3 sm:px-0 py-10">
        <div className="max-w-xl mx-auto p-4 sm:p-6 bg-white shadow rounded">
          <div className="flex flex-col space-y-4">
            <Link to="/" title="Go Back" className=" text-primary-600 px-3 py-2 shadow-inner
              hover:shadow transition-shadow duration-300 ease-linear">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <Link to="/" className="flex space-x-3" aria-label="LearnR">
              <img src={logo} alt="logo" className="img-fluid w-16 h-16" />
              <h3 className="flex items-center uppercase"><span className="text-xl font-bold">Learn</span>{" "}
              <span className="text-primary-800 text-2xl font-bolder">R</span></h3>
              
            </Link>
            <div>
              <h4 className="h2 md:text-xl text-lg py-5 text-center">
                Sign In
              </h4>
              <p className=" text-lg text-gray-500 text-center">
                Welcome Back!
              </p>
              <hr className="mt-3" />
            </div>

            <div className="mt-8">
              <form onSubmit={formik.handleSubmit}>
                {/* Email */}
                <div className="form-group mb-4">
                  <Input
                    name="email"
                    type="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    // placeholder="Ex. frankokwara@gmail.com"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="pt-1 text-sm text-red-600">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                {/* Password */}
                <div className="form-group mb-4">
                  <PasswordInput
                    name="password"
                    type="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="***********"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="pt-1 text-sm text-red-600">
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <Link
                    to="/forgot-password"
                    className="text-primary-700 sm:text-base  font-medium focus:outline-none text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Remember me */}
                <div className="switch relative mt-3">
                  <label className="remember ml-16" htmlFor="remember">
                    Remember me
                    <input
                      type="checkbox"
                      className="switch-input"
                      id="remember"
                    />
                    <span className="slider round" />
                  </label>
                </div>

                {/* Submit */}
                <div>
                  <Button disabled={loadState} type="submit">
                    {loadState ? (
                      <PulseLoader size={20} loading color="white" />
                    ) : (
                      <>
                        Log in
                        <i className="fa fa-unlock pl-4" />
                      </>
                    )}
                  </Button>
                </div>

                {/* SIgn up */}
                <p className="text-center">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary-700 font-semibold">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default SignIn;
