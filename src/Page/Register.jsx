import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
function Register() {
  const formik = useFormik({
    initialValues: {
      name: "john",
      email: "john@gmail.com", 
      password: "123",
      cpassword: "123",
      checkbox:""
    },

    validationSchema: yup.object({
      name: yup.string().required("Enter Your First Name"),
     
      checkbox: yup.boolean()
      .oneOf([true], 'You need to accept the terms and conditions')
      .required("Click on CkeckBox"),

      email: yup
        .string()
        .email("Something Wents Wrong")
        .required("Enter Your Email"),

      password: yup
        .string()
        .max(6, "max six char required")
        .min(3, "min therr char required")
        .required("Enter Your password"),

      cpassword: yup
        .string()
        .min(3, "max char required")
        .max(6, "min char required")
        .oneOf([yup.ref("password")], "Password Do Not Match")
        .required("Enter Your Conform Password"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
    {/* {JSON.stringify(formik.errors)} */}
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "35px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="name"
                              onChange={formik.handleChange}
                              value={formik.values.name}
                              onBlur={formik.handleBlur}
                              type="text"
                              id="form3Example1c"
                              className={
                                formik.errors.name && formik.touched.name
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            {/* <div className="valid-feedback">looks good</div>
                              <div className="invalid-feedback fw-bolder">{formik.errors.name}</div> */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                              onBlur={formik.handleBlur}
                              type="email"
                              id="form3Example3c"
                              className={
                                formik.errors.email && formik.touched.email
                                  ? "form-control is-invalid"
                                  : " form-control"
                              }
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            <div className="valid-feedback">looks good</div>
                            <div className="invalid-feedback fw-bolder">
                              {formik.errors.email}
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="password"
                              onChange={formik.handleChange}
                              value={formik.values.password}
                              onBlur={formik.handleBlur}
                              type="password"
                              id="form3Example4c"
                              className={
                                formik.errors.password &&
                                formik.touched.password
                                  ? "form-control is-invalid"
                                  : " form-control"
                              }
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <div className="valid-feedback">looks good</div>
                            <div className="invalid-feedback fw-bolder">
                              {formik.errors.password}
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="cpassword"
                              onChange={formik.handleChange}
                              value={formik.values.cpassword}
                              onBlur={formik.handleBlur}
                              type="password"
                              id="form3Example4cd"
                              className={
                                formik.errors.cpassword &&
                                formik.touched.cpassword
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Confirm your password
                            </label>
                            <div className="valid-feedback">looks good</div>
                            <div className="invalid-feedback fw-bolder">
                              {formik.errors.cpassword}
                            </div>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            name="checkbox"
                            value={formik.values.checkbox}
                            // boolean="false"
                            onChange={formik.handleChange}
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                          <div className="valid-feedback">looks good</div>
                            <div className="invalid-feedback fw-bolder">
                              {formik.errors.checkbox}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg fw-bolder" aria-disabled="false"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
