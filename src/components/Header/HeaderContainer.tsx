import React from "react";
import Header from "./index";
import axios from "axios";
import {
  AuthDataType,
  setAuthUserData,
} from "../../redux/reducers/authReducer";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.setAuthUserData(res.data.data);
        }
      });
  }

  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}

type mapDispatchToPropsType = {
  setAuthUserData: (authUserData: AuthDataType) => void;
};
type mapStateToPropsType = {
  isAuth: boolean;
  login: null | string;
};
type HeaderContainerPropsType = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
