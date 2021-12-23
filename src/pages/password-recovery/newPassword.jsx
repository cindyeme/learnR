import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PulseLoader } from "react-spinners";
import { Link } from "react-router-dom";

import { PasswordInput } from "../../components/utils/Textfields";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";

const ResetPassword = ({ resetPassword, loadState }) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    // validate the form inputs

    validationSchema: Yup.object({
      password: Yup.string().required("Email Is Required."),

      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords dont match")
        .required("Confirm Your Password"),
    }),

    onSubmit: (values) => {
      // dispatch action mapped by react redux

      resetPassword(values);
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
                Reset Password
              </h4>
              <p className=" text-lg font-bold text-gray-500 text-center">
                Enter new password
              </p>
              <hr className="mt-3" />
            </div>

            <div className="mt-8">
              <form onSubmit={formik.handleSubmit}>
                {/* Password  */}
                <div className="form-group mb-4">
                  <PasswordInput
                    name="password"
                    type="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    // {...formik.getFieldProps('password')}
                    // placeholder="Password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p style={{ color: "red", fontSize: ".7rem" }}>
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>
                {/* Confirm Password */}
                <div className="form-group mb-4">
                  <PasswordInput
                    name="confirmPassword"
                    type="confirmPassword"
                    label="Confirm Password"
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    {...formik.getFieldProps("passwordConfirm")}
                    // placeholder="Confirm Password"
                  />
                  {formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm ? (
                    <p style={{ color: "red", fontSize: ".7rem" }}>
                      {formik.errors.passwordConfirm}
                    </p>
                  ) : null}
                </div>
                {/* Submit */}
                <div className="mt-6">
                  <Button
                    disabled={loadState}
                    type="submit"
                    className="rounded-md w-full bg-primary-amber font-semibold flex space-x-3 justify-center"
                  >
                    {loadState ? (
                      <PulseLoader size={20} loading color="white" />
                    ) : (
                      <>
                        <span>Reset Password</span>
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
