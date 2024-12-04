import { FunctionComponent, useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserLoginFormValues } from "../interfaces/User";

import { getUserToken, setTokenLocalStorage } from "../services/userServices";
import { GlobalProps } from "../App";

interface LoginProps {
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: FunctionComponent<LoginProps> = ({ setIsRegister }) => {
  const { setToken, setIsUsserLogedin } = useContext(GlobalProps);
  const [msg, setMsg] = useState("");

  const formik = useFormik<UserLoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required().min(5),
      password: yup.string().required().min(7).max(20),
    }),
    onSubmit: async (values) => {
      getUserToken(values)
        .then((res) => {
          if (res.data.length > 0) {
            console.log(res.data);
            setToken(res.data);
            setTokenLocalStorage(res.data);
            setIsUsserLogedin(true);

            // successMsg("Sucessful login");
          } else {
            console.log("User not found- ", res.data);

            setMsg("User not found");
          }
        })
        .catch((err) => {
          console.log(err);
          setMsg("Transaction Error");
        });
    },
  });

  return (
    <>
      <div className="container d-flex justify-content-center align-item-center flex-column col-6">
        <h5 className="display-5 my-2">LOGIN</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button
            className="btn btn-primary mt-3 w-100"
            type="submit"
            disabled={!formik.dirty || !formik.isValid}
          >
            Login
          </button>
          <p style={{ color: "red" }}>{msg}</p>
        </form>
        <p className="mt-3">
          {/* <a
           
            onClick={() => setIsRegister(true)}
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            New user? Register now
          </a> */}

          <button
            onClick={() => setIsRegister(true)}
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
              background: "none",
              border: "none",
              padding: 0,
              fontSize: "inherit",
              fontFamily: "inherit",
            }}
          >
            New user? Register now
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
