import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  isAuth: state.auth.isAuth,
});

class Login extends Component<ReturnType<typeof mapStateToProps>> {
  render() {
    const { isAuth } = this.props;
    if (isAuth) {
      return <Navigate to={"/profile"} />;
    }

    return <h1>LOGIN</h1>;
  }
}

export default connect(mapStateToProps)(Login);
