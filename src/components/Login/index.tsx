import { connect, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginUserTC } from "../../redux/reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

//Xk2CBpZfXaMPh!f

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
});

interface FormErrorsType {
  email: string;
  password: string;
}

interface FormValuesType extends FormErrorsType {
  rememberMe: boolean;
}

const validate = (values: FormValuesType) => {
  const errors = {} as FormErrorsType;
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length <= 6) {
    errors.password = "Must be more than 6 characters";
  }
  console.log(errors);
  return errors;
};

function Login({ isAuth }: ReturnType<typeof mapStateToProps>) {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate,
    onSubmit: (values) => {
      dispatch(loginUserTC(values));
      formik.resetForm();
    },
  });

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      <div>
        <label htmlFor="rememberMe">Запомнить</label>
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.rememberMe}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default connect(mapStateToProps)(Login);
