import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PulseLoader } from "react-spinners";
import { Link } from "react-router-dom";

import { Input } from "../../components/Utils/Textfields";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import "../../components/Svg/svg.css";

const RequestToken = ({ requestToken, loadState }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    // validate the form inputs
    validationSchema: Yup.object({
      email: Yup.string().required("Email Is Required."),
    }),

    onSubmit: (values) => {
      // dispatch action mapped by react redux
      requestToken(values);
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
                Recovery Mail
              </h4>
              <p className=" text-lg font-bold text-gray-500 text-center">
                Enter email address for recovery token.
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
                    autoFocus
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="pt-1 text-sm text-red-600">
                      {formik.errors.email}
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
                        <span>Submit</span>
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


export default RequestToken;