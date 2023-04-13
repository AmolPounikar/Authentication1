import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import { logreducer } from "../Redux/Reducer/loginReducer";
function Login() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "john@gmail.com",
      password: "123",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Something Went Wrong")
        .required("Plese Enter Correct email"),

      password: yup.string().required("Please Enter Correct Password"),
    }),
    onSubmit:(values)=>{
      console.log(values)
      dispatch(logreducer(values))
    }
  });
  useEffect(()=>{

  },[])
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            id="form2Example17"
                            className={
                              formik.errors.email && formik.touched.email
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                          <div className="valid-feedback">looks good</div>
                            <div className="invalid-feedback fw-bolder">
                              {formik.errors.email}
                            </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            id="form2Example27"
                            className={
                              formik.errors.password && formik.touched.password
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        <Link className="small text-muted" to="">
                          Forgot password?
                        </Link>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                        <Link to="" className="small text-muted">
                          Terms of use.
                        </Link>
                        <Link to="" className="small text-muted">
                          Privacy policy
                        </Link>
                      </form>
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

export default Login;
