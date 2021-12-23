import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";

import { Input, PasswordInput } from "../components/Utils/Textfields";
import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";

const SignUp = ({ loadState }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name Is Required"),

      lastName: Yup.string().required("Last Name Is Required"),

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
          <div className="flex flex-col space-y-">
            <Link to="/signin" title="Go Back">
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
                Create Account
              </h4>
              <p className=" text-lg font-bold text-gray-500 text-center">
                Sign up to get started
              </p>
              <hr className="mt-3" />
            </div>

            <div className="mt-8">
              <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                  {/* First Name */}
                  <div className="form-group mb-4 col-span-full md:col-span-1">
                    <Input
                      name="firstName"
                      type="text"
                      label="First Name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      // placeholder="Ex. Cynthia"
                      autoFocus
                      {...formik.getFieldProps("firstName")}
                    />

                    {formik.touched.firstName && formik.errors.firstName ? (
                      <p className="pt-1 text-sm text-red-600">
                        {formik.errors.firstName}
                      </p>
                    ) : null}
                  </div>

                  {/* Lastname */}
                  <div className="form-group mb-4 col-span-full md:col-span-1">
                    <Input
                      name="lastName"
                      type="text"
                      label="Last Name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      // placeholder="Ex. Emerenini"
                      {...formik.getFieldProps("lastName")}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <p className="pt-1 text-sm text-red-600">
                        {formik.errors.lastName}
                      </p>
                    ) : null}
                  </div>

                  {/* Email */}
                  <div className="form-group mb-4 col-span-full">
                    <Input
                      name="email"
                      type="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      // placeholder="Ex. yourusername@domain.com"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="pt-1 text-sm text-red-600">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </div>

                  {/* Password */}
                  <div className="form-group mb-4 col-span-full">
                    <PasswordInput
                      name="password"
                      type="password"
                      label="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="**********"
                      {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <p className="pt-1 text-sm text-red-600">
                        {formik.errors.password}
                      </p>
                    ) : null}
                  </div>
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
                        <span>Sign Up</span>
                        <FontAwesomeIcon icon={faUserPlus} />
                      </>
                    )}
                  </Button>
                </div>
                {/* Terms & Policy agreement */}
                <div className="text-sm text-gray-500 text-center mb-4">
                  By creating an account, you agree to our{" "}
                  <Link
                    to="/terms"
                    className="underline hover:text-primary-700 font-medium"
                  >
                    Terms of use
                  </Link>
                  , and our{" "}
                  <Link
                    to="/privacy"
                    className="underline hover:text-primary-700 font-medium"
                  >
                    Privacy policy
                  </Link>
                  .
                </div>
                <p className="text-center pt-4 text-grayish-900">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-primary-700 font-semibold hover:text-primary-amber"
                  >
                    Sign in
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

export default SignUp;
