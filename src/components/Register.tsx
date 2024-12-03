
import { FunctionComponent, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {  UserLoginFormValues } from "../interfaces/User";
// import { checkUser } from "../services/usersService";
import { Link } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbackService";
// import { getUser } from "../services/userServices";
import { GlobalProps } from "../App";

interface RegisterProps {
    
    setIsResgister:React.Dispatch<React.SetStateAction<boolean>>;
}
 
const Register: FunctionComponent<RegisterProps> = ({setIsResgister}) => {
     
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
      // getUser(values)
      //   .then((res) => {
      //     if (res.data.length > 0) {
      //       // console.log(res.data);
      //       // setIsUsserLogedin(true)
           
      //       successMsg("Sucessful login");
      //     } else {
      //       console.log("User not found- ", res.data);
      //       errorMsg("User not found");
      //     }
      //   }
      // )
      //   .catch((err) => {
      //     console.log(err);
      //     errorMsg(err);
      //   });
    },
  });

  return (
    <>
      <div className="container d-flex justify-content-center align-item-center flex-column col-6">
        <h5 className="display-5 my-2">Register</h5>
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
        </form>
        <p className="mt-3">
        <a onClick={()=>setIsResgister(false)}  style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Back to Login</a>
          
        </p>
      </div>
    </>
  );
}
 
export default Register;