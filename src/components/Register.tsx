
import { FunctionComponent, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserReg } from "../interfaces/User";



interface RegisterProps {
    
    setIsRegister:React.Dispatch<React.SetStateAction<boolean>>;
}
 
const Register: FunctionComponent<RegisterProps> = ({setIsRegister}) => {
     
  const formik = useFormik<UserReg>({
    initialValues: {
      name: {
        first: "",
        middle: "",
        last: "",
      },
      phone: "",
      email: "",
      password: "",
      image: {
        url: "",
        alt: "",
      },
      address: {
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: 0,
        zip: undefined,
      },
      isBusiness: false,
    },
    validationSchema: yup.object({
      name: yup.object({
        first: yup.string().required().min(2).max(256),
        middle: yup.string().min(2).max(256),
        last: yup.string().required().min(2).max(256),
      }),
      phone: yup
        .string()
        .required().min(9).max(1)
        .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
      email: yup
        .string()
        .email("Invalid email address")
        .required()
        .min(5, "must be at least 5 characters"),
      password: yup
        .string()
        .required()
        .min(7, "must be at least 7 characters")
        .max(20, "cannot exceed 20 characters"),
      image: yup.object({
        url: yup
          .string().min(14)
          .url("Invalid URL"),
        alt: yup.string().min(2).max(256),
      }),
      address: yup.object({
        state: yup.string().min(2).max(256),
        country: yup.string().required().min(2).max(256),
        city: yup.string().required().min(2).max(256),
        street: yup.string().required().min(2).max(256),
        houseNumber: yup
          .number()
          .required().min(2).max(256)
          .positive()
          .integer(),
        zip: yup
          .number()
          .positive("ZIP code must be positive")
          .integer("ZIP code must be an integer")
          .required().min(2).max(256),
      }),
      isBusiness: yup.boolean().required(),
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
        <a onClick={()=>setIsRegister(false)}  style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>Back to Login</a>
          
        </p>
      </div>
    </>
  );
}
 
export default Register;