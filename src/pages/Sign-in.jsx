import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Input, PasswordInput } from "../components/utils/Textfields";
import Button from "../components/button/Button";
import Logo from "../components/logo/Logo";
import "../styles/svg.css";

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
    <section className="sprinkle">
      <div className="relative transform translate-y-12 px-3 sm:px-0 py-10">
        <div className="max-w-xl mx-auto p-4 sm:p-6 bg-white shadow rounded">
          <div className="flex flex-col space-y-">
            <Link to="/" title="Go Back">
              <span
                className=" text-primary-600 px-3 py-2 shadow-inner
              hover:shadow transition-shadow duration-300 ease-linear text-lg"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
            </Link>
            <Logo />
            <div>
              <h4 className="h2 md:text-xl text-primary-700 uppercase font-bolder text-xl tracking-wide py-4 text-center">
                Welcome Back!
              </h4>
              <p className=" text-lg font-bold text-gray-500 text-center">
                Sign in to your account
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
                    // placeholder="Ex. youremail@domain.com"
                    autoFocus="true"
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
                    className="text-primary-700 hover:text-primary-amber  font-semibold focus:outline-none text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit */}
                <div className="my-4">
                  <Button
                    disabled={loadState}
                    type="submit"
                    className="rounded-md w-full bg-primary-amber font-semibold flex space-x-3 justify-center"
                  >
                    {loadState ? (
                      <PulseLoader size={20} loading color="white" />
                    ) : (
                      <>
                        <span>Log in</span>
                        <FontAwesomeIcon icon={faUnlock} />
                      </>
                    )}
                  </Button>
                </div>

                {/* SIgn up */}
                <p className="text-center text-grayish-900">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-primary-700 font-semibold hover:text-primary-amber"
                  >
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
